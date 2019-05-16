const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
cosnt htmlPlugin = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[hash].js'

    },
    plugins: [htmlPlugin],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}