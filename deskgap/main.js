const { app, BrowserWindow, messageNode, shell } = require('deskgap');
const pkg = require('./package.json');
const createServer = require('./server');
const path = require('path');

// setup message listeners
messageNode.on('ping', (event, message) => {
	event.sender.send('pong', `Pong: ${message}`);
});
messageNode.on('url', (event, message) => {
	shell.openExternal(message);
});

// setup window
const win = new BrowserWindow({
	menu: null,
	title: pkg.name,
});

// setup server + load index in window when it's ready
const hostname = 'localhost';
let server;
new Promise(resolve => (server = createServer(0, hostname, resolve)))
	.then(() => app.whenReady())
	.then(() => win.loadURL(`http://${hostname}:${server.address().port}`))
	.then(async () => {
		if (await win.webContents.executeJavaScript(`window.location.href`) === 'about:blank') {
			return win.loadFile(path.resolve(__dirname, 'fallback.html'));
		}
	})
	.then(() => win.webContents.executeJavaScript(`console.log('loaded')`))
	.catch(err => {
		console.error(err);
		win.webContents.executeJavaScript(`console.log('failed')`);
		win.webContents.executeJavaScript(`console.log(\`${err.toString()}\`)`);
	});
