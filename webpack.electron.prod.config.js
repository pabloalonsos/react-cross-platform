const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    target: 'electron',
    entry: [ './src/index.js' ],
    output: {
        filename: 'main.js',
        path: './app'
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
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
