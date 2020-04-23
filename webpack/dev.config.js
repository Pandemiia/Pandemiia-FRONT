const baseConfig = require('./base.config.js');
const Variables = require('../config');

const { ACTIVE_THEME } = process.env;
const globalVariables = new Variables(ACTIVE_THEME);

/** MODULES **/
const sassLoader = require('./modules/sass-loader-module');

/** PLUGINS **/
const cssPlugin = require('./plugins/css-loader-plugin');
const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');

const devConfig = Object.assign({}, baseConfig, {
  mode: 'development',

  devtool: 'source-map',

  entry: {
    main: ['@babel/polyfill', './js/main']
  },

  module: {
    rules: [...baseConfig.module.rules, sassLoader(ACTIVE_THEME)]
  },

  plugins: [...baseConfig.plugins, cssPlugin(ACTIVE_THEME), htmlWebpackPlugin(ACTIVE_THEME)],

  devServer: {
    contentBase: globalVariables.DIST_PATH,
    host: globalVariables.HOST_NAME,
    port: globalVariables.DEV_SERVER_PORT,
    historyApiFallback: true,
    hot: true
  }
});

module.exports = devConfig;
