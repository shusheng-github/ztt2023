const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MyPlugin = require('../plugin/index');
const happypack = require('happypack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, '../dist'),
    clean: true
  },
  devtool: "source-map",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          path.resolve(__dirname, '../loader/drop-console.js'),
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              cacheDirectory: true
            }
          }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '测试', // 生成的html的title
      template: path.resolve(__dirname, '../public/index.html') // 以某个html为模板生成html
    }),
    new MiniCssExtractPlugin(),
    new MyPlugin(),
    new happypack({
      id: 'js',
      threads: 4,
      loaders: ['babel-loader']
    })
  ]
}