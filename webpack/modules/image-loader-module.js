module.exports = {
  test: /\.(jpg|gif|svg|png|woff|woff2|eot|ttf)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 8192
    }
  }
};
