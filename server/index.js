import Express from 'express';
import App from '../app';

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

const app = Express()

app.get('/', function (req, res) {
    res.send(renderPage(App));
})

app.listen(8000, function () {
    console.log('app listening on port 8000');
})
