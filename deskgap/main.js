const {
	app,
	BrowserWindow,
	messageNode,
} = require('deskgap');
const http = require('http');
const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');

// setup message listeners
messageNode.on('ping', (event, message) => {
	event.sender.send('pong', `Pong: ${message}`);
});

const win = new BrowserWindow({
	menu: null,
	title: pkg.name,
});

const hostname = 'localhost';
let server;
Promise.all([
	new Promise(resolve => app.once('ready', resolve)),
	new Promise(resolve => server = createServer(0, hostname, resolve)),
]).then(() => {
	win.loadURL(`http://${hostname}:${server.address().port}/index.html`);
});

function createServer(port, hostname, cb) {
	return http.createServer(function (request, response) {
		const filePath = './' + request.url;
		const extname = path.extname(filePath);
		let contentType = 'text/html';
		switch (extname) {
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
			default:
				break;
		}

		fs.readFile(path.join('./resources/app/', filePath), function (error, content) {
			if (error) {
				if (error.code === 'ENOENT') {
					fs.readFile('./404.html', function (error, content) {
						response.writeHead(200, {
							'Content-Type': contentType
						});
						response.end(content, 'utf-8');
					});
				} else {
					response.writeHead(500);
					response.end('Error: ' + error.code);
					response.end();
				}
			} else {
				response.writeHead(200, {
					'Content-Type': contentType
				});
				response.end(content, 'utf-8');
			}
		});
	}).listen(port, hostname, cb);
}
