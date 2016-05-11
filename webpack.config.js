const path = require('path');

module.exports = {
  entry: {
    app: [
      'angular2/bundles/angular2-polyfills',
      path.resolve(__dirname, './src/main.ts'),
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [],

  resolve: {
    extensions: ['', '.ts', '.js'],
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
    noParse: [
      /zone\.js\/dist\/.+/,
      /angular2\/bundles\/.+/,
    ],
  },

  devServer: {
    historyApiFallback: true,
  },
};
