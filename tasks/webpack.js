/* eslint-env node */

// Webpack gulp task
//
// npm install --save-dev webpack gulp-util
//
// Available tasks:
// - webpack:build
// - webpack:build:dev
// - webpack-dev-server

const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const WEBPACK_CONFIG = require('../webpack.config.js');

// PRODUCTION
const webpackBuildProdTask = callback => {
  // modify some webpack config options
  const config = Object.assign({}, WEBPACK_CONFIG, {
    plugins: [
      ...WEBPACK_CONFIG.plugins,
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
    ],
  });

  // run webpack
  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build-prod', err);
    }

    gutil.log('[webpack:build-prod]', stats.toString({
      colors: true,
    }));

    callback();
  });
};

// DEVELOPMENT
const webpackBuildDevTask = (function task() {
  // modify some webpack config options
  const devConfig = Object.assign({}, WEBPACK_CONFIG, {
    devtool: 'sourcemap',
    debug: true,
  });

  // create a single instance of the compiler to allow caching
  const devCompiler = webpack(devConfig);

  return callback => {
    // run webpack
    devCompiler.run((err, stats) => {
      if (err) {
        throw new gutil.PluginError('webpack:build-dev', err);
      }

      gutil.log('[webpack:build-dev]', stats.toString({
        colors: true,
      }));

      callback();
    });
  };
}());

const webpackDevServerTask = () => {
  // modify some webpack config options
  const config = Object.assign({}, WEBPACK_CONFIG, {
    devtool: 'eval',
    debug: false,
    plugins: [
      ...WEBPACK_CONFIG.plugins,
      new webpack.HotModuleReplacementPlugin(),
    ],
  });

  // add special hot-reloading entries to all existed entry points
  config.entry = Object.keys(config.entry).reduce((acc, entry) => {
    let entries = config.entry[entry];

    if (!Array.isArray(entries)) {
      entries = [entries];
    }

    return Object.assign({}, acc, {
      [entry]: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/dev-server',
        ...entries,
      ],
    });
  }, {});

// Start a webpack-dev-server
  new WebpackDevServer(webpack(config), {
    contentBase: 'src/',
    hot: true,
    stats: {
      colors: true,
    },
  }).listen(8080, 'localhost', err => {
    throw new gutil.PluginError('webpack-dev-server', err);
  });
};

gulp.task('webpack:build', webpackBuildProdTask);
gulp.task('webpack:build:dev', webpackBuildDevTask);
gulp.task('webpack-dev-server', webpackDevServerTask);
