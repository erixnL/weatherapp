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
  entry: './src/js/main.ts',
  devtool: 'inline-source-map',
  output: { 
    path: __dirname + '/dist', 
    filename: "app.js" ,
    clean: true,
    environment: {
      module: true,
      dynamicImport: true,   // Note you need to enable `dynamicImport ` here
    },
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
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
    },
}
