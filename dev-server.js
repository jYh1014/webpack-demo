const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require("path");
const webpackconfig = require('./build/webpack.dev.conf.js');
const config = require('./config')
const options = {
  contentBase:path.join(__dirname,'/dist/'),
  publicPath:'/',
  hot: true,
  host: '0.0.0.0'
};
webpackDevServer.addDevServerEntrypoints(webpackconfig, options);
const compiler = webpack(webpackconfig);
const server = new webpackDevServer(compiler, options);
server.listen(config.dev.port, 'localhost', () => {
  console.log(`dev server listening on port ${config.dev.port}`);
});