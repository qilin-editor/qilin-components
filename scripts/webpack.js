const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "../src/preview.js",
  target: "web",
  context: __dirname,

  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "preview.js"
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../preview/index.html")
    })
  ]
};
