const config = require('./webpack.config');
const webpack = require('webpack');

module.exports = (webpackConfig) => {
  webpackConfig = config(webpackConfig);
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'process.api': JSON.stringify('/api/'),
    'process.env.desktop': true,
    'process.env.mobile': true,
    production: false
  }));

  webpackConfig.devtool = '#source-map';

  return webpackConfig;
};
