const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
    stories: ['../src/**/*.stories.(js|mdx)', '../packages/**/*.stories.(js|mdx)'],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName:  '[name]__[local]___[hash:base64:5]'
                }
            },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }],
            include: [path.resolve(__dirname, '../packages'), path.resolve(__dirname, '../src')],
        });

        config.module.rules.push({
            test: /\.(stories|story)\.mdx$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-transform-react-jsx'],
                    },
                },
                {
                    loader: '@mdx-js/loader',
                    options: {
                        compilers: [createCompiler({})],
                    },
                },
            ],
        });

        // Return the altered config
        return config;
    }
};