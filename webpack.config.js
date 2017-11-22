const path = require('path');
var config = {
   entry: './src/main.js',
   output: {
      path:path.join(__dirname, 'public'),
      filename: 'index.js',
   },
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 8889
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader'
            ]
         },

         { 
            test: /\.(png|jpg|svg)$/,
             use: [
                 'file-loader'
             ]
           
        }
        ]
   }
}
module.exports = config;