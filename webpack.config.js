const path = require('path')
const Html = require('html-webpack-plugin')
const MiniCss = require("mini-css-extract-plugin");

module.exports = [{
  target: 'web',
  mode: 'development',
  entry: './src/index.mjs',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].bundle.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /\bnode_modules\b/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env'],
            ['@babel/preset-react']
          ],
          plugins: [
            ['@babel/plugin-transform-runtime']
          ]
        }
      },
      {
        test: /\.css$/,
        use: [MiniCss.loader, 'css-loader']
      },
      {
        test: /\.(?:png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      }
    ]
  },
  plugins: [
    new MiniCss(),
    new Html({
      template: './src/index.html',
      filename: '../public/index.html'
    })
  ]
}]
