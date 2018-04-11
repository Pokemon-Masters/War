const path = require('path');

module.exports = {
    mode: "development",
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                  loader:'babel-loader'
                },
            },
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "style-loader"
                },
                {
                  loader: "css-loader" 
                }
              ]
            },
        ]
    },
}