var path = require("path")
module.exports = {
    entry: './header.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename:'a.bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                use:'babel-loader'
            }
        ]
    }
}