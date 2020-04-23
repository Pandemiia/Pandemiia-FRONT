module.exports = {
    extends: require.resolve('@pinua/presets/eslint'),
    rules: {
        "import/no-unresolved": 'off'
    },
    settings: {
        'import/resolver': "webpack"
    }
}