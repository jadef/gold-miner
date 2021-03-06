var webpack = require('webpack');
var path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  "mode": "development",
  // devtool: '#eval-source-map',
  "context": path.join(__dirname, 'app'),
  "entry": [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './index.js'
  ],
  "output": {
    "path": path.join(__dirname, 'app'),
    "publicPath": '/js/',
    "filename": 'bundle.js'
  },
  "plugins": [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({
      "configFile": 'stylelint.config.js'
    })
  ],
  "resolve": {
    "extensions": [
      '.js',
      '.json',
      '.jsx'
    ]
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.jsx?$/,
        "exclude": /node_modules/,
        "use": [
          { "loader": "eslint-loader" }
        ]
      }, {
        "test": /\.jsx?$/,
        "exclude": /node_modules/,
        "use": [
          { "loader": "babel-loader" },
          { "loader": "webpack-module-hot-accept" }
        ]
      }, {
        "test": require.resolve('snapsvg/dist/snap.svg.js'),
        "use": [
          { "loader": "imports-loader?wrapper=window&additionalCode=module.exports=0;"
          }
        ]
      }, {
        "test": /\.scss$/,
        "use": [
          { "loader": "style-loader" },
          { "loader": "css-loader", "options": { sourceMap: true } },
          { "loader": "postcss-loader", "options": { sourceMap: true } },
          { "loader": "sass-loader", "options": { sourceMap: true } }
        ]
      }
    ]
  }
};
