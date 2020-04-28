const path = require('path');

module.exports = function(activeThemeName) {
  /** APP VARIABLES **/
  const IS_DEV_MODE = process.env.NODE_ENV === 'development';
  const THEME = activeThemeName || 'pandemiainua-theme';
  const APP_PATH = path.join(__dirname, `../src/${THEME}`);
  const DIST_PATH = path.join(__dirname, IS_DEV_MODE ? `../src/${THEME}` : `../server/static/${THEME}`);

  /** CSS VARIABLES **/
  const CSS_COLOR_VARIABLES_PATH = path.join(__dirname, `../packages/themes/${THEME}/`);
  const CSS_VARIABLES_PATH = path.join(__dirname, '../packages/themes/');

  /** SERVER VARIABLES **/
  const HOST_NAME = 'localhost';
  const DEV_SERVER_PORT = 4000;

  return {
    IS_DEV_MODE,
    APP_PATH,
    DIST_PATH,
    HOST_NAME,
    DEV_SERVER_PORT,
    CSS_VARIABLES_PATH,
    THEME_NAME: THEME,
    CSS_COLOR_VARIABLES_PATH
  };
};
