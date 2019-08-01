// dependencies
const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass         = require('gulp-sass');
const browsersync  = require('browser-sync').create();
const rename       = require('gulp-rename');
const sourcemaps   = require('gulp-sourcemaps')
const babel = require('gulp-babel');
 

function scss(done){
  gulp.src('_/components/sass/styles.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
  .pipe(gulp.dest('_/components/css/'))
  .pipe(sass({outputStyle:'compressed'}))
  .pipe(rename('styles.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('_css/'))
  .pipe(browsersync.stream());
  done();
}

function browserSync(done) {
  browsersync.init({
    server: {
       baseDir: "./",
    },
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch("_/components/sass/*.scss", scss);
  gulp.watch("*.html", browserSyncReload);
}


gulp.task('default', gulp.parallel(watchFiles, browserSync));
