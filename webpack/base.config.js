const webpack = require('webpack');
const path = require('path');
const Variables = require('../config');

/** MODULES **/
const babelLoader = require('./modules/babel-loader-module');
const imageLoader = require('./modules/image-loader-module');
const svgLoader = require('./modules/svg-loader-module');
const eslintLoader = require('./modules/eslint-loader-module');

/** PLUGINS **/
const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');
const styleLintPlugin = require('./plugins/stylelint-plugin');

const { ACTIVE_THEME } = process.env;

process.noDeprecation = true;

const globalVariables = new Variables(ACTIVE_THEME);

module.exports = {

  context: globalVariables.APP_PATH,

  entry: {
    main: ['@babel/polyfill', './js/main']
  },

  output: {
    path: globalVariables.DIST_PATH,
    filename: '[name].min.js',
    publicPath: '/'
  },

  module: {
    rules: [eslintLoader, imageLoader, babelLoader, svgLoader]
  },

  performance: {
    maxEntrypointSize: 30000,
    hints: false
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        },
        defaultVendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  resolve: {
    alias: {
      config: path.resolve(__dirname, '../config'),
      components: path.resolve(__dirname, `../src/${globalVariables.THEME_NAME}/js/components/`),
      modules: path.resolve(__dirname, `../src/${globalVariables.THEME_NAME}/js/modules/`),
      store: path.resolve(__dirname, `../src/${globalVariables.THEME_NAME}/js/store/`),
      i18n: path.resolve(__dirname, `../src/${globalVariables.THEME_NAME}/js/locales`)
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      IS_DEV_MODE: globalVariables.IS_DEV_MODE
    }),

    new webpack.EnvironmentPlugin(['NODE_ENV']),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    styleLintPlugin(ACTIVE_THEME),

    htmlWebpackPlugin(ACTIVE_THEME)
  ]
};
