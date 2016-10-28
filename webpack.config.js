var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry:
    './src/index.tsx'
  ,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  extensions: ["", ".ts", ".tsx", ".js"],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};