const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const concat = require('gulp-concat');
const gzip = require('gulp-gzip');

gulp.task('concat', () => {
  return gulp.src([
    `./dist/release/runtime.*.js`,
    `./dist/release/polyfills.*.js`,
    `./dist/release/scripts.*.js`,
    `./dist/release/main.*.js`
  ])
    .pipe(concat(`release.js`))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('gzip', () => {
  return gulp.src(`./dist/release.js`)
    .pipe(gzip())
    .pipe(gulp.dest('./dist/'));
})

gulp.task('default', gulpsync.sync(['concat', 'gzip']));
