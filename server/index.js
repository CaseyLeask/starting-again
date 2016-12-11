import Express from 'express';
import App from '../app';
import RenderPage from './renderPage';

const app = Express()

app.get('/', function (req, res) {
    res.send(RenderPage(App));
})

app.listen(8000, function () {
    console.log('app listening on port 8000');
})
