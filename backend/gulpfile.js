'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var spawn = require('child_process').spawn;


gulp.task('default', ['nodemon'], function () {
});

gulp.task('nodemon', function(cb) {
  var started = false;

  return nodemon({
    script: 'app/server.js',
  }).on('start', function() {
    // to avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  });
});
