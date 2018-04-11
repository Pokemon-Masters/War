const path = require('path');

module.exports = {
    mode: "development",
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
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
              test: /\.css$/,
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