const {
	app,
	BrowserWindow,
	messageNode,
} = require('deskgap');
const http = require('http');
const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');

messageNode.on('hello-to-node', (e, message) => {
    e.sender.send('hello-from-node', `Hello, ${message}`);
});

const win = new BrowserWindow({
	menu: null,
	title: pkg.name,
});

app.once('ready', () => {
	const hostname = 'localhost';
	serve(0, hostname, function() {
		win.loadURL(`http://${hostname}:${this.address().port}/index.html`);
		win.setTitle(pkg.name);
	});
});

function serve(port, hostname, cb) {
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
