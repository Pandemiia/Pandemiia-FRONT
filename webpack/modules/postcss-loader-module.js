const MinCssExtractLoader = require('mini-css-extract-plugin');
const Variables = require('../../config');
const path = require('path');

module.exports = function(theme) {
  const globalVariables = new Variables(theme);
  const { CSS_VARIABLES_PATH, CSS_COLOR_VARIABLES_PATH, IS_DEV_MODE } = globalVariables;
  return {
    test: /\.css$/,
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
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: loader => [
            require('postcss-for'),
            require('postcss-import')({ root: loader.resourcePath }),
            require('postcss-cssnext')({
              warnForDuplicates: false,
              browsers: ['>1%', 'last 4 versions', 'Firefox ESR'],
              flexbox: 'no-2009',
              features: {
                customProperties: {
                  variables: Object.assign(
                    {},
                    require(path.join(CSS_COLOR_VARIABLES_PATH, '/css-color-variables')),
                    require(path.join(CSS_VARIABLES_PATH, '/css-font-sizes')),
                    require(path.join(CSS_VARIABLES_PATH, '/css-sizes'))
                  )
                }
              }
            }),
            require('cssnano')({ zindex: false }),
            require('postcss-nested')(),
            require('postcss-extend')(),
            require('postcss-color-function')(),
            require('postcss-flexbugs-fixes')()
          ]
        }
      }
    ]
  };
};
