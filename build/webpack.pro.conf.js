var path = require("path")
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var merge = require('webpack-merge')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')
var businessBlue = ['./src/assets/styles/blue.less']
module.exports = {
    entry: {
        app: './src/index.js',
        utils: ['Utils'],
        blueTheme: businessBlue
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
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','runtime'],
            filename: '[name].js',
            minChunks: function (module,count) {
              console.log(module.resource,`引用次数${count}`);
              //"有正在处理文件" + "这个文件是 .js 后缀" + "这个文件是在 node_modules 中"
              return (
                  module.resource &&
                  /\.js$/.test(module.resource) &&
                  module.resource.indexOf(path.join(__dirname, './node_modules')) === 0
              )
          }
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: ['common'],
          filename: '[name].js',
          chunks: ['app','utils']//从first.js和second.js中抽取commons chunk
      }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname
        }),
        new ExtractTextPlugin('[name].css')
    ]
}