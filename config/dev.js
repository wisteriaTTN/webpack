const common  = require('./common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      },
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true
        },
      }),
    ],
  },
});