var webpack = require('webpack');
var path = require('path');

module.exports = {
  // devtool: '#eval-source-map',
  context: path.join(__dirname, 'app'),
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'app'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader',
          'webpack-module-hot-accept'
        ]
      }
    ]
  }
};
