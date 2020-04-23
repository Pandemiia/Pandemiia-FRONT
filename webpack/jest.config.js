module.exports = {
  verbose: true,
  rootDir: '../',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/src/js/test/__mocks__/styles.js',
    '\\i18n$': '<rootDir>/src/pandemiainua-theme/js/locales/index.js'
  },
  moduleDirectories: ['node_modules', 'packages'],
  collectCoverageFrom: ['src/**/js/**/*.js']
};
