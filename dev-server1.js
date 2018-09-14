// const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require("path");
const express = require('express');
const config = require('./webpack.dev.conf.js');
const options = {
  contentBase: path.join(__dirname, '/'),
  port: 9001,
  hot: true,
  host: '0.0.0.0'
};
const app = express();
// webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
// const server = new webpackDevServer(compiler, options);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  contentBase:path.join(__dirname,'/'),
  publicPath: path.join(__dirname, '/'),
  quiet: true,
  logLevel: 'error',
});
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => { },
});
app.use(devMiddleware);
app.use(hotMiddleware);
app.use('/', express.static('./dist'));
// app.use(express.static(path.join(__dirname, './dist')));
devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at port 9001\n`);
})
app.listen(9001, 'localhost', () => {
  console.log('--------dev server listening on port 9001-----------');
});