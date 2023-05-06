const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = function createServer(port, hostname, cb) {
	return http.createServer(function (request, response) {
		let filePath = path.join(__dirname, request.url);
		if (fs.statSync(filePath).isDirectory()) {
			filePath = path.join(filePath, 'index.html');
		}
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

		fs.readFile(filePath, function (error, content) {
			if (error) {
				console.error(error);
				if (error.code === 'ENOENT') {
					fs.readFile('./404.html', function (error, content) {
						response.writeHead(200, {
							'Content-Type': contentType
						});
						response.end(content, 'utf-8');
					});
				} else {
					response.writeHead(500);
					response.end('Error: ' + error.code, 'utf-8');
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
