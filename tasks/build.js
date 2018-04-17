import gulp from 'gulp'
import webpack from 'webpack'

let exec = require('child_process').exec;

gulp.task('webpack', function(cb) {
  exec('webpack --color', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
