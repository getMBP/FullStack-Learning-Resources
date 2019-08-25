const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
var package     = require('./package.json');

module.exports = {
  entry: {
    app : './src/index.js',
    vendor: Object.keys(package.dependencies)
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        resolve: { extensions: [".js"] },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            "plugins": ["@babel/plugin-transform-arrow-functions"]
          }
        }
      }
    ]
    
  },
  plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};