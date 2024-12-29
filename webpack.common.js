const webpack = require("webpack"),
    path = require('path'),

    htmlWebpackPlugin = require("html-webpack-plugin"),
    { CleanWebpackPlugin } = require('clean-webpack-plugin');

    module.exports = {
        entry: ["./src/client/index.js"],
        module: {
            rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
            ]
        },
        output: {
            filename: 'bundle.[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'var',
            library: 'Client',
            clean: true,
        },
        plugins: [
            new htmlWebpackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html"
            }),
            new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: false,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false,
               
            }),
        ],
    };