//Include gulp
var gulp      = require('gulp'),
    gutil     = require('gulp-util'),
    webserver = require('gulp-webserver'),
    baseUrl   = 'development/';

//Selects as source of data the following
gulp.task('js', function() {
  gulp.src(baseUrl+'js/**/*')
});

gulp.task('html', function() {
  gulp.src(baseUrl+'*.html')
});

gulp.task('css', function() {
  gulp.src(baseUrl+'/css/*.css')
});

//Watch for changes on the following files
gulp.task('watch', function() {
  gulp.watch(baseUrl+'js/**/*', ['js']);
  gulp.watch(baseUrl+'css/*.css', ['css']);
  gulp.watch([baseUrl+'*.html'], ['html']); //,'builds/development/views/*.html'
});

//Inicia el servidor
gulp.task('webserver', function() {
  gulp.src(baseUrl)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

//Includes the tasks on the default task
gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);