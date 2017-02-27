/**
 * Webpack configuration.
 */

var path = require('path');
var webpack = require('webpack');
var config = require('./config.json');

// App configuration
var root = path.join(__dirname, config.root);
var port = config.port;

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    path.join(root, '/js/app')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(root, '/js')
    }]
  }
};
