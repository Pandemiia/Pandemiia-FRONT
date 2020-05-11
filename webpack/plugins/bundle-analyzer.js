const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Variables = require('../../config');

module.exports = theme => {
  const globalVariables = new Variables(theme);

  return new BundleAnalyzerPlugin();
};
