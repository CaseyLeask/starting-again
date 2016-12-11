import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../app';
import RenderPage from './renderPage';

const app = Express()

app.get('/', (req, res) => {
  res.send(RenderPage(ReactDOMServer.renderToString(<App />)));
});

app.listen(8000, () => {
  console.log('app listening on port 8000');
});

