module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier-standard', 'plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  plugins: ['filenames', 'react-hooks'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'filenames/match-regex': [2, '^[a-z0-9-.]+$', true],
    'react/prop-types': ['error', { ignore: ['className', 'children', 'style', 'id'] }],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/no-typos': ['error'],
    'max-depth': ['warn', 4],
    'max-lines': ['warn', 300],
    'max-params': ['warn', 4],
    complexity: ['warn', { max: 14 }],
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreDOMComponents: true,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false
      }
    ],
    'import/first': ['error', 'absolute-first'],
    'import/no-unresolved': ['error'],
    'prettier/prettier': ['error', null, { usePrettierrc: true }],
    camelcase: 0,
    'standard/computed-property-even-spacing': 0,
    'no-control-regex': 0,
    'no-template-curly-in-string': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1
  },
  overrides: [
    {
      files: ['*.test.js', '*.stories.js'],
      rules: {
        'react/jsx-no-bind': 'off',
        'max-lines': 'off'
      }
    }
  ]
};
