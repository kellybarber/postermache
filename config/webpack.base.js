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
        test: /\.js$/, 
        use: [ 'babel-loader' ], 
        exclude: /node_modules/ 
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [ 'file-loader' ],
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