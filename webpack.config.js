'use strict';

var precss = require('precss');
var path   = require('path');

module.exports = {

  context: path.join(__dirname, 'app'),
  entry: './index.jsx',
  output: {

    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'

  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  postcss: [precss],
  module: {

    loaders: [

    {

      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {

        presets: ['react', 'es2015']

      }

    },
    {

      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style!css!postcss'

    }

    ]

  }

};
