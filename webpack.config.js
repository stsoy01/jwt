const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development'
const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`


module.exports = {
    entry: {
        index: './src/scripts/index.js',
        api: './src/scripts/api.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: fileName('js'),
        clean: true
    },
    devServer: {
        port: 1000,
    },
    devtool: isDev ? 'source-map' : 'eval',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    resolve: {
        fallback:  {

        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Start page',
            filename: 'index.html',
            template: './src/index.html',

        }),
        new HtmlWebpackPlugin({
            title: 'Auth page',
            filename: 'auth.html',
            template: './src/auth.html',
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                    'css-loader',]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|oft)$/i,
                type: 'asset/resource'
            }
        ]
    }
}
