const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'js/[name].min.js',
    //path: path.resolve(__dirname, 'dist'), 
    path: path.resolve('./dist'),
    //path: process.cwd() //current working directory,
  },
  watchOptions: {
    ignored: [
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(gif|jpg|svg|png|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
      template: './src/index.html',
    }),
  ]
}