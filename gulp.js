// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var url    = 'assets/';

// Check for errors on our JS code
gulp.task('lint', function() {
    return gulp.src(url+'js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile the Sass
gulp.task('sass', function() {
    return gulp.src(url+'scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(url+'js/*.js')
        .pipe(concat(url+'OwnFront.js'))
        .pipe(gulp.dest(url+'dist'))
        .pipe(rename(url+'OwnFront.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
    guol.watch('s')
});

// Default Task
gulp.task('OwnFront', ['lint', 'sass', 'scripts', 'watch']);