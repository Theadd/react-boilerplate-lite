require("dotenv").config({ silent: true });

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    app: [path.resolve("src/index.tsx")],
  },

  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, use: ["babel-loader", "awesome-typescript-loader"] },
    ],
  },
};
