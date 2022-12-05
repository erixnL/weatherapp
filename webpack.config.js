const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { 
  mode: "none", 
  entry: './src/main.js',
  output: { 
    path: __dirname + '/dist', 
    filename: "app.js" ,
  }, 
    devServer: { 
      contentBase: path.join(__dirname, 'dist') 
    }, 
  plugins:  [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, 
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
