const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      { 
        test: /\.(sc|c)ss$/, 
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    port: 3000,
    proxy: { '/api': 'http://localhost:8080' }
  }
})