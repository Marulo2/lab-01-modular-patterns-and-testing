const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');

var testFiles = ['test/*.js'];
var appFiles = ['lib/*.js'];

gulp.task('default', ['lint:app', 'lint:test', 'test', 'watch' ], () => {
  console.log('Gulp is running');
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


gulp.task('test', () => {
  gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('watch', () => {
  console.log('Watch is running');
  gulp.watch('./**/*.js', ['lint:app', 'lint:test', 'test']);
});
