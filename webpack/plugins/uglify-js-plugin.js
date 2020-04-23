const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const jsUglify = new UglifyJsPlugin({
  test: /\.js($|\?)/i,
  cache: true,
  parallel: false,
  sourceMap: false,
  uglifyOptions: {
    warnings: false,
    parse: {},
    compress: {},
    mangle: true,
    output: null,
    toplevel: false,
    nameCache: null,
    ie8: false,
    keep_fnames: false
  }
});

module.exports = jsUglify;
