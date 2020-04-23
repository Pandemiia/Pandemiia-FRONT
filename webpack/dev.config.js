const baseConfig = require('./base.config.js');
const Variables = require('../config');

const { ACTIVE_THEME } = process.env;
const globalVariables = new Variables(ACTIVE_THEME);

/** MODULES **/
const postCssLoader = require('./modules/postcss-loader-module');

/** PLUGINS **/
const postCssPlugin = require('./plugins/postcss-loader-plugin');
const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');

const devConfig = Object.assign({}, baseConfig, {
  mode: 'development',

  devtool: 'source-map',

  entry: {
    main: ['@babel/polyfill', './js/main']
  },

  module: {
    rules: [...baseConfig.module.rules, postCssLoader(ACTIVE_THEME)]
  },

  plugins: [
    ...baseConfig.plugins,
    postCssPlugin(ACTIVE_THEME),
    htmlWebpackPlugin(ACTIVE_THEME)
  ],

  devServer: {
    contentBase: globalVariables.DIST_PATH,
    host: globalVariables.HOST_NAME,
    port: globalVariables.DEV_SERVER_PORT,
    historyApiFallback: true,
    hot: true
  }
});

module.exports = devConfig;
