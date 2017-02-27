var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var config = require('./config.json');
var path = require('path');
var root = path.join(__dirname, config.root);
var nodeModules = path.join(__dirname, '../node_modules');

var server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: root,
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
});

// Serve nodes modules (to be able to include bootstrap.css).
server.app.use(express.static(nodeModules));

// Add body-parser
server.app.use(require('body-parser').json());

// Add Rules API
require('./rules-api')(server.app);

server.listen(config.port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Server listening on : http://localhost:' + config.port);
});
