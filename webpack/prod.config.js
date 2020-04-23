const path = require('path');
const baseConfig = require('./base.config');
const Variables = require('../config');

/** MODULES **/
const sassLoader = require('./modules/sass-loader-module');

/** PLUGINS **/
const cleanWebpackPlugin = require('./plugins/clean-webpack-plugin');
const uglifyJsPlugin = require('./plugins/teaser-js-plugin');
const cssPlugin = require('./plugins/css-loader-plugin');
const optimizeCSSAssetsPlugin = require('./plugins/optiomize-css-assets-plugin');
const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');
const compressionWebpackPlugin = require('./plugins/compression-webpack-plugin');

const THEMES_LIST = ['pandemiainua-theme'];

const config = THEMES_LIST.map(function(theme) {
  const globalVariables = new Variables(theme);

  return {
    ...baseConfig,

    mode: 'production',

    context: globalVariables.APP_PATH,

    output: {
      path: globalVariables.DIST_PATH,
      filename: '[name].min.[hash].js',
      publicPath: '/' + theme + '/'
    },

    resolve: {
      alias: {
        ...baseConfig.resolve.alias,
        components: path.resolve(__dirname, `../src/${globalVariables.THEME_NAME}/js/components/`),
        modules: path.resolve(__dirname, `../src/${globalVariables.THEME_NAME}/js/modules/`),
        store: path.resolve(__dirname, `../src/${globalVariables.THEME_NAME}/js/store/`),
        i18n: path.resolve(__dirname, `../src/${globalVariables.THEME_NAME}/js/locales`)
      }
    },

    module: {
      rules: [...baseConfig.module.rules, sassLoader(theme)]
    },

    plugins: [
      cleanWebpackPlugin(theme),
      ...baseConfig.plugins,
      cssPlugin(theme),
      htmlWebpackPlugin(theme),
      compressionWebpackPlugin
    ],

    optimization: {
      ...baseConfig.optimization,
      minimize: true,
      minimizer: [uglifyJsPlugin, optimizeCSSAssetsPlugin]
    }
  };
});

module.exports = config;
