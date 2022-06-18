const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        loader: "img-optimize-loader",
        options: {
          compress: {
            mode: "high",
            webp: true,
            disableOnDevelopment: true,
            gifsicle: true,
          },
        },
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=video/[name].[ext]",
      },
      {
        test: /\.mp3$/,
        use: "file-loader?name=audio/[name].[ext]",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  devServer: {
    port: 3000,
    watchFiles: ["./*"],
    open: true,
    hot: true,
  },
};
