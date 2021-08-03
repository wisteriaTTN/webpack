const common  = require('./common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  // modules: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         {
  //           loader: 'style-loader'
  //         },
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             sourceMap: true,
  //           }
  //         },
  //         {
  //           loader: 'sass-loader',
  //           options: {
  //             sourceMap: true
  //           }
  //         },
  //       ],
  //     },
  //   ]
  // }
});