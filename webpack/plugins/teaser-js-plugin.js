const TerserPlugin = require('terser-webpack-plugin');

const jsUglify = new TerserPlugin({
    test: /\.js(\?.*)?$/i,
    parallel: true,
    terserOptions: {
        ecma: 6,
        warnings: false,
        parse: {},
        compress: {},
        mangle: true,
        module: false,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: true,
    },
});

module.exports = jsUglify