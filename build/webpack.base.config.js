const path = require('path')



const baseConfig = {
    entry:{
        main: './src/main.js'
    },
    output: {
        // root: path.resolve('..'),
        filename: '[name].[hash].js',
        // path: path.resolve(__dirname, 'dist'),
        publicPath: '/',

    },
    mode: 'development'
}

module.exports = baseConfig