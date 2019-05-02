const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/docs',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test:/\.(s*)css$/,
        use: [

          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader"

        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
};