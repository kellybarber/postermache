const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ parallel: true, sourceMap: true }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [
      { 
        test: /\.(sc|c)ss$/, 
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ] 
      }
    ]
  }
})