const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const htmlPlugin = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})
module.exports = {
    entry: {
        index: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[hash].js',
        publicPath: '/'
    },
    //plugins: [htmlPlugin],
    plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                /* options: {
                     plugins: ['react-hot-loader/babel']
                 }*/
            }
        }, {
            test: /.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
}