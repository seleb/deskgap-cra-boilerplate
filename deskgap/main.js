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
	win.webContents.executeJavaScript(`console.log('started')`);
	win.webContents.executeJavaScript(`console.log(navigator.userAgent)`);
	const url = `http://${hostname}:${server.address().port}`;
	win.webContents.executeJavaScript(`console.log('${url}')`);
	return win.loadURL(url);
}).then(() => {
	win.webContents.executeJavaScript(`console.log('loaded')`);
}).catch((err) => {
	console.error(err);
	win.webContents.executeJavaScript(`console.log('failed')`);
	win.webContents.executeJavaScript(`console.log(\`${err.toString()}\`)`);
});
