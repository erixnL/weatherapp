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
  entry: './src/ts/app.ts',
  devtool: 'inline-source-map',
  output: { 
    path: __dirname + '/dist', 
    filename: "main.js" ,
    clean: true,
    environment: {
      module: true,
      dynamicImport: true, 
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
      template: "./src/index.html",
      favicon: './src/favicon.png',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader','postcss-loader'
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
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader?name=[name].[ext]']
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
