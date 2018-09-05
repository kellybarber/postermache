const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [ 'babel-polyfill', './src/index.js' ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        use: [ 'babel-loader' ], 
        test: /\.js$/, 
        exclude: /node_modules/ 
      },
      {
        use: [ 'file-loader' ],
        test: /\.(png|jpg|gif)$/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      filename: './index.html',
      inject: false
    }),
    new CleanWebpackPlugin(
      [ 'dist' ], 
      { root: path.resolve(__dirname, '..') }
    )
  ],
  resolve: { extensions: [ '*', '.js', '.css', '.scss' ] }
}