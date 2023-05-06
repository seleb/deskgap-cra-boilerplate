const {
	app,
	BrowserWindow,
	messageNode,
} = require('deskgap');
const pkg = require('./package.json');
const createServer = require('./server');

// setup message listeners
messageNode.on('ping', (event, message) => {
	event.sender.send('pong', `Pong: ${message}`);
});

// setup window
const win = new BrowserWindow({
	menu: null,
	title: pkg.name,
});

// setup server + load index in window when it's ready
const hostname = 'localhost';
let server;
Promise.all([
	new Promise(resolve => app.once('ready', resolve)),
	new Promise(resolve => server = createServer(0, hostname, resolve)),
]).then(() => {
	const url = `http://${hostname}:${server.address().port}`;
	win.loadURL(url);
}).catch((err) => {
	console.error(err);
});
