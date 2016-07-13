const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
// const watch = require('gulp-watch');

var testFiles = ['../test/test.js'];
var appFiles = ['../lib/cowsay.js'];

gulp.task('default', ['lint:app', 'lint:test', 'mocha:test', 'watch' ], () => {
  console.log('Gulp is running');
});

gulp.task('mocha:test', () => {
  return gulp.src(testFiles, {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint:app', () => {
  gulp.src(appFiles)
    .pipe(eslint({
      rules : {
        'indent' : [2,2]
      },
      envs: [
        'node',
        'es6',
        'mocha'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  gulp.src(testFiles)
    .pipe(eslint());
});

gulp.task('watch', () => {
  console.log('Watch is running');
  gulp.watch('./**/*.js', ['lint:app', 'lint:test', 'mocha:test']);
});
