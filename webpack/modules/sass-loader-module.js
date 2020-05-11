const MinCssExtractLoader = require('mini-css-extract-plugin');
const Variables = require('../../config');

module.exports = function(theme) {
  const globalVariables = new Variables(theme);
  const { IS_DEV_MODE } = globalVariables;
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
          sourceMap: IS_DEV_MODE
        }
      }
    ]
  };
};
