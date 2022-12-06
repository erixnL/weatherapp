const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = { 
  // mode: "development", 
  mode: process.env.NODE_ENV === "production" ? "production": "development",
  entry: './src/js/main.js',
  output: { 
    path: __dirname + '/dist', 
    filename: "app.js" ,
    clean: true,
  }, 
    devServer: { 
      watchFiles: ["src/**/*", "index.html"],
      static: "./dist" }, 
  plugins:  [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader'
            ]
          
        },
        {
          test: /\.js$/, 
          exclude: /node_modules/, 
          use: { 
                loader: "babel-loader", 
                options: { 
                presets: [ "@babel/preset-env", ] }
        }
      }
      ]
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
}
