const webpack = require("webpack"),
    path = require("path"),
    common = require("./webpack.common"),
    {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    plugins: [
        
    ],


});