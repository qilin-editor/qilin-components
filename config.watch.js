const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

module.exports = {
  entry: "./src/preview.js",
  target: "web",
  context: __dirname,

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js"
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./preview/index.html"
    })
    // new BundleAnalyzerPlugin()
  ]
};
