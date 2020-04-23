const MinCssExtractPlugin = require('mini-css-extract-plugin');
const Variables = require('../../config');

const postCss = function(theme) {
  const globalVariables = new Variables(theme);
  return new MinCssExtractPlugin({
    filename: globalVariables.IS_DEV_MODE ? '[name].css' : '[name].[hash].css',
    chunkFilename: globalVariables.IS_DEV_MODE ? '[id].css' : '[id].[hash].css'
  });
};

module.exports = postCss;
