const gulp = require('gulp');
const eslint = require('gulp-eslint');

var testFiles = ['test/**/*.js'];
var appFiles = ['lib/**/*.js'];

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

gulp.task('default', ['lint:app', 'lint:test']);
