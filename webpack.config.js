var webpack = require("webpack");
var path = require("path");

var sourcePath = path.resolve(__dirname, "source");
var jsSourcePath = path.resolve(__dirname, "source");
var scssSourcePath = path.resolve(__dirname, "source/scss");
var buildPath = path.resolve(__dirname, "dist");

var config = {
    entry: sourcePath + "/index.jsx",
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: [path.join(__dirname, "/node_modules")],
                use: 'babel-loader'
            },
          /*  {
                test: /\.scss$/,
                exclude: [path.join(__dirname, "/node_modules")],
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: "true"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }*/
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".scss"],
        modules: [
            "node_modules",
            jsSourcePath
        ],
        alias: {
          scss: scssSourcePath
        }
    },

    devtool: "eval-source-map"
};

module.exports = config;
