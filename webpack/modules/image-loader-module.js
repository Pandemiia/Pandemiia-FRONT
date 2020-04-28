module.exports = {
  test: /\.(jpg|gif|png|woff|woff2|eot|ttf)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 8192
    }
  }
};
