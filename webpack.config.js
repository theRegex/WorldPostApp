 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './app.js',
     output: {
         path: path.resolve(__dirname, './public/build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.jsx?$/,
                 loader: 'babel-loader',
                 exclude: '/node_modules/',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
        ]
     },
     watch:true,
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };