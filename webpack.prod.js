const webpack = require("webpack"),
    path = require("path"),
    CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    TerserPlugin = require("terser-webpack-plugin"),
    common = require("./webpack.common"),
    {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    devtool: "hidden-source-map",
  
    plugins: [
    new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        minimize: true,
    },


});