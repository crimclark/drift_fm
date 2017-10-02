const PORT = 3000;

import express from 'express';

const app = express();
app.use(express.static('public'));

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.dev.js');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  }
}));

app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}`);
});
