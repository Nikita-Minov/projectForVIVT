const gulp      = require('gulp');
const sass      = require('gulp-sass');
 
sass.compiler = require('node-sass');

const watcher = gulp.watch(['./sass/**/*.scss'],{}, gulp.series(sassCompile));

function sassCompile() { 
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'));
}

exports.default = sassCompile