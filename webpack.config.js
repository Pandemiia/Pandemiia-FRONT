const isDevMode = process.env.NODE_ENV !== "production";

const devConfig = require('./webpack/dev.config');
const prodConfig = require('./webpack/prod.config');

module.exports = isDevMode ? devConfig : prodConfig;