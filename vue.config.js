// vue.config.js
var webpack = require('webpack');

let config  = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                // allow access to process.env from within the vue app
                'process.env': {
                    PUBLISHABLE_KEY: JSON.stringify("pk_hn9A3NKMlNej2XwQwMnyMMQT2mb2X"),
                }
            })
        ]
    }
}


module.exports = config;
