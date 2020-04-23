const MinCssExtractLoader = require('mini-css-extract-plugin');
const Variables = require('../../config');

module.exports = function(theme) {
  const globalVariables = new Variables(theme);
  const { CSS_VARIABLES_PATH, CSS_COLOR_VARIABLES_PATH, IS_DEV_MODE, DIST_PATH } = globalVariables;
  return {
    test: /\.(css|sass|scss)$/,
    use: [
      MinCssExtractLoader.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: IS_DEV_MODE ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            data: '@import "variables";',
            outputStyle: 'compressed',
            includePaths: [CSS_VARIABLES_PATH, CSS_COLOR_VARIABLES_PATH, DIST_PATH]
          },
          sourceMap: IS_DEV_MODE
        }
      }
    ]
  };
};
