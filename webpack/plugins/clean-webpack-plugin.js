const CleanWebpackPlugin = require('clean-webpack-plugin');
const Variables = require('../../config');
const path = require('path');

module.exports = function(theme) {
  const globalVariables = new Variables(theme);
  return new CleanWebpackPlugin([globalVariables.DIST_PATH], {
    root: path.resolve(__dirname, '../../'),
    verbose: true,
    beforeEmit: true,
    exclude: ['favicon.ico', 'logo192.png', 'logo512.png', 'manifest.json', 'robots.txt']
  });
};
