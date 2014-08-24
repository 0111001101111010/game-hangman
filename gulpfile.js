// npm install gulp gulp-mocha

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var istanbul = require('gulp-istanbul');

gulp.task('test', function (cb) {
  gulp.src(['hangman.js'])
    .pipe(istanbul()) // Covering files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});

gulp.task('watch-test', function() {
     gulp.watch(['hangman.js', 'test/**'], ['test']);
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});
gulp.task('watch-mocha', function() {
    gulp.watch(['hangman.js', 'test/**'], ['mocha']);
});
