const path = require('path'); 

module.exports = { 
  "mode": "none", 
  "entry": './src/main.js', 
  "output": { 
    "path": __dirname + '/dist', 
    "filename": "app.js" }, 
    devServer: { 
      contentBase: path.join(__dirname, 'dist') 
    }, 
    "module": { 
        "rules": [ { 
          "test": /\.css$/, 
          "use": [ "style-loader", "css-loader" ] 
        }, 
        { 
          "test": /\.js$/, 
          "exclude": /node_modules/, 
          "use": { 
            "loader": "babel-loader", 
            "options": { 
              "presets": [ "@babel/preset-env", ] 
            } 
          } 
        }, 
      ] }
};