var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app': path.resolve(__dirname, './src/bootstrap.ts'),
    'vendor': path.resolve(__dirname, './src/vendor.ts')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
    noParse: [
      /zone\.js\/dist\/.+/,
      /angular2\/bundles\/.+/
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
