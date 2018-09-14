
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'antd',
            'redux',
            'md5',
            'moment',
            'lodash.clonedeep',
            'lodash.debounce',
            'lodash.isequal',
            'classnames'
        ]
    },
    resolve: {
		extensions: ['.js', '.jsx'],
	},
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].dll.js'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: "[name].dll.js",
            path: path.join(__dirname, "/dist", "[name].manifest.json"),
        })
    ]
}