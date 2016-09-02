var path = require('path');
 
module.exports = {
  watch: true,
  entry: './src/app.jsx',
  output: 
  { 
    path: path.resolve(__dirname, "bin"),
    filename: 'app.js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};