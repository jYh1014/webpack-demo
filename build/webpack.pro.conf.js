var path = require("path")
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var merge = require('webpack-merge')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')
module.exports = {
    entry: {
        app: './src/index.js',
        utils: ['Utils']
    },
    output: {
        path: path.join(__dirname, "..", "/dist"),
        filename:'[name].bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'img/[name].[hash:8].[ext]',
                        limit: 81920
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 50000,
                    name: 'fonts/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.(mp3)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 50000,
                    name: 'audio/[name].[hash:8].[ext]',
                },
            },
            // {
            //     test: /\.less$/,
            //     use: ['style-loader','css-loader','less-loader']
            // },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader','less-loader']
                })
            }
        ]
    },
    resolve: {
        extensions: [".js",'.jsx'],
        alias: {
            '@': path.resolve(__dirname, '..', 'src'),
            'Utils': path.resolve(__dirname, '..', 'src/utils')
        }
    },
    // externals: {
    //     jquery: 'jq'
    //   },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.build.env,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
          }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname
        }),
        new ExtractTextPlugin('style.css')
    ]
}