'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
// var httpProxy = require('http-proxy');

/* This configuration allow you to configure browser sync to proxy your backend */
var proxyTarget = 'http://localhost:9000/'; // The location of your backend
var proxyApiPrefix = 'api'; // The element in the URL which differentiate between API request and static file request

// var proxy = httpProxy.createProxyServer({
//   target: proxyTarget
// });

function proxyMiddleware(req, res, next) {
  if (req.url.indexOf(proxyApiPrefix) !== -1) {
    proxy.web(req, res);
  } else {
    next();
  }
}

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    server: {
      baseDir: baseDir
      //, middleware: proxyMiddleware
    },
    browser: browser
  });

}

gulp.task('serve', ['clean', 'build', 'watch'], function () {

  browserSyncInit([
    'app',
    '.tmp'
  ], [
    'app/*.html',
    '.tmp/styles/**/*.css',
  ]);

});
