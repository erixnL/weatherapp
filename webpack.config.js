const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { 
  // mode: "development", 
  mode: process.env.NODE_ENV === "production" ? "production": "development",
  entry: './dist/js/main.js',
  output: { 
    path: __dirname + '/dist', 
    filename: "app.js" ,
  }, 
    devServer: { 
      static: "./dist" }, 
  plugins:  [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            
            MiniCssExtractPlugin.loader, 'css-loader',
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
}
