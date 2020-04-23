# Pandemiia-FRONT

## Installation

```bash
$ npm install
```
or
```bash
$ yarn
```

## Running the Project

After completing the installation step, you're ready to start the project!

```bash
$ npm run start 
```
or
```bash
$ yarn start 
```

## Project structure


```
.
|-- /config                             # Global webpack variables

|-- /packages                           # Reusable packages (can be usend in other app)
|   |--/common                          # Shared components
|   |--/themes                          # Shared themes
|   |--/uikit                           # Shared custom UI elements such as text, box (grid) and form elements
|   |--/utils                           # Application utils

|-- /server                             # base Nodejs server
|   |--/bin                             # main server folder
|   |--/routes                          # server routes

|-- /src                                 # Application source code 
|-- |-- /pandemiainua-theme              # Project Theme name
|   |-- /js                              # Js folder
|   |   |--/components                   # Components with containers
|   |   |--/modules                      # Redux actions and reducers
|   |   |--/locales                      # i18n Localization
|   |   |--/stores                       # Application store folder
|   |   |--/pages                        # Apploication Pages (Routes)
|   |   |--main.js                       # Main app file
|   |   |--index.html                    # Main HTML page container for app

|-- /static                              # Compiled application static files

|-- /webpack                             # Webpack configs folder
|   |--/modules                          # Webpack modules folder
|   |--/plugins                          # Webpack plugins folder
|   |-- base.config.js                   # Base webpack config with default properties
|   |-- dev.config.js                    # Developement webpack config   
|   |-- prod.config.js                   # Production webpack config 
```

## Styles
We are using CSS naming map at the webpack config.
Also you can make default css variables configuration at the css-color-variables.js and this variables will be used across all your application  

```javascript
const globalVariables = require('../config/global.variables.webpack');

module.exports = {
     test: /\.css/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: globalVariables.IS_DEV_MODE ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
                }
            }, {
                loader: 'postcss-loader',
                options:
                    {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('postcss-import')({root: loader.resourcePath}),
                            require('postcss-cssnext')({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR'
                                ],
                                flexbox: 'no-2009',
                                features: {
                                    customProperties: {
                                        variables: Object.assign({},
                                            require(path.join(globalVariables.CSS_VARIABLES_PATH, `/${globalVariables.ACTIVE_THEME_NAME}/css-color-variables`)),
                                            require(path.join(globalVariables.CSS_VARIABLES_PATH, '/globals/css-font-sizes')),
                                            require(path.join(globalVariables.CSS_VARIABLES_PATH, '/globals/css-sizes'))
                                        )
                                    }
                                }
                            }),
                            require('cssnano')(),
                            require('postcss-nested')(),
                            require('postcss-flexbugs-fixes')()
                        ]
                    }
            }
            ]
        })
}
           
```