const StylelintPlugin = require('stylelint-webpack-plugin');
const Variables = require('../../config');

module.exports = function(theme) {
    const globalVariables = new Variables(theme);

    return new StylelintPlugin();
};