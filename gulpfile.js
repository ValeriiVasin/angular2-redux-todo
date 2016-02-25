const gulp = require('gulp');
const concat = require('gulp-concat');
const preprocess = require('gulp-preprocess');

require('./tasks/webpack');

const DESTINATION_FOLDER = 'dist/';

gulp.task('html', () => {
  gulp.src('src/index.html')
    .pipe(preprocess())
    .pipe(gulp.dest(DESTINATION_FOLDER));
});

gulp.task('favicon', () => {
  gulp.src('src/favicon.ico')
    .pipe(gulp.dest(DESTINATION_FOLDER));
});

gulp.task('css', () => {
  gulp.src('src/css/*.css')
    .pipe(concat('app.css'))
    .pipe(gulp.dest(DESTINATION_FOLDER));
});

gulp.task('build', ['html', 'favicon', 'css', 'webpack:build']);
gulp.task('build:dev', ['html', 'favicon', 'css', 'webpack:build:dev']);
