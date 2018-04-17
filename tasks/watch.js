import gulp from 'gulp'
import webpack from 'webpack'

let spawn = require('child_process').spawn;

gulp.task('watch', (cb) => {
  const webpack_watch = spawn('webpack', ['--watch', '--color']);

  webpack_watch.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  webpack_watch.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  webpack_watch.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});
