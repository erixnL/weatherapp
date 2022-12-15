const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = { 
  // mode: "development", 
  mode: process.env.NODE_ENV === "production" ? "production": "development",
  node: {
    __dirname: false,
  },
  entry: './src/js/main.js',
  output: { 
    path: __dirname + '/dist', 
    filename: "app.js" ,
    clean: true,
  }, 
  devServer: { 
    watchFiles: ["src/**/*", "index.html"],
    static: "./dist" ,
    hot: true,
  }, 
  plugins:  [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
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
        new TerserPlugin(),
      ],
    },
}
