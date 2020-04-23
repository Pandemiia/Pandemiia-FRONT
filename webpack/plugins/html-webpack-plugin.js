const HtmlWebpackPlugin = require('html-webpack-plugin');
const Variables = require('../../config');

module.exports = function(theme) {
  const globalVariables = new Variables(theme);

  return new HtmlWebpackPlugin({
    title: 'Welcome to Evolvice',
    template: `${globalVariables.APP_PATH}/index.html`,
    meta: {
      'theme-color': '#fff'
    },
    minify: {
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }
  });
};
