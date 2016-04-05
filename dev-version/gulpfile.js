var gulp = require('gulp');

// plugins
var wiredep = require('wiredep').stream;
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var notify = require("gulp-notify");
var watch = require('gulp-watch');
var clean = require('gulp-clean');


// CSS autoprefixer, minify
/*gulp.task('css:build', function () {
  return gulp.src('src/css/style.css')
	.pipe(autoprefixer({
	  browsers: ['last 10 versions'],
	  cascade: false
	}))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./build/css'))
	.pipe(notify({ message: 'css:build task complete' }));
}); */


// JS concat, minify, rename
/*gulp.task('js:build', function() {
  return gulp.src('./js/*.js')
  	.pipe(jshint())
    .pipe(jshint.reporter('default'));
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/js'))
    .pipe(notify({ message: 'js:build task complete' }));
});
*/


gulp.task('bower', function () {
  gulp.src('src/*.html')
    .pipe(wiredep({
      directory: "app/bower_components" 
    }))
    .pipe(gulp.dest('./src'));
});


gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'html task complete' }));
});


// HTML minify
gulp.task('html:min', function() {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
   // .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/'))
    .pipe(notify({ message: 'html:min task complete' }));
});


// Watch
gulp.task('watch', function() {
  	// Watch .html files
  	gulp.watch('./*.html', ['html:min']);
  	// Watch .css files
  	gulp.watch('./css/*.css', ['css:build']);
  	// Watch .js files
	gulp.watch('./js/*.js', ['js:build']);
});


// The default task (called when you run 'gulp' from cli)
gulp.task('default', ['html:min', 'css:build', 'js:build', 'watch']);