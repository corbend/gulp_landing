'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('watch',
  function () {
  gulp.watch('app/less/**/*.less', ['styles']);
});