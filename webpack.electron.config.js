const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    target: 'electron',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8181/',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 8181
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'react-native': 'react-native-electron'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
}
