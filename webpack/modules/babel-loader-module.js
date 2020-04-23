module.exports = {
  test: /\.js?$|\.jsx?$/,
  exclude: [/node_modules/],
  use: [
    {
      loader: 'cache-loader'
    },
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread'
        ]
      }
    }
  ]
};
