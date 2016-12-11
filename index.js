const http = require('http');

const renderPage = (content) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>title</title>
    </head>
    <body>
    ${content}
    </body>
    </html>
    `
};

const server = http.createServer((req, res) => {
  res.write(renderPage('Hello World'));
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
