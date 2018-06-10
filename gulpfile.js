const projectName = 'angular-elements-starter';

const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const concat = require('gulp-concat');
const gzip = require('gulp-gzip');

gulp.task('concat', () => {
  return gulp.src([
    `./dist/${projectName}/runtime.*.js`,
    `./dist/${projectName}/polyfills.*.js`,
    `./dist/${projectName}/scripts.*.js`,
    `./dist/${projectName}/main.*.js`
  ])
    .pipe(concat(`${projectName}.js`))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('gzip', () => {
  return gulp.src(`./dist/${projectName}.js`)
    .pipe(gzip())
    .pipe(gulp.dest('./dist/'));
})

gulp.task('default', gulpsync.sync(['concat', 'gzip']));
