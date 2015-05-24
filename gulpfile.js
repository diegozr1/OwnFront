//Include gulp
var gulp      = require('gulp'),
    gutil     = require('gulp-util'),
    webserver = require('gulp-webserver'),
    baseUrl   = 'development/';

//Selecciona como funte de datos las siguientes carpetas
gulp.task('js', function() {
  gulp.src(baseUrl+'js/**/*')
});

gulp.task('html', function() {
  gulp.src(baseUrl+'*.html')
});

gulp.task('css', function() {
  gulp.src(baseUrl+'/css/*.css')
});

//Observa los siguientes archivos para cambios
gulp.task('watch', function() {
  gulp.watch(baseUrl+'js/**/*', ['js']);
  gulp.watch(baseUrl+'css/*.css', ['css']);
  gulp.watch([baseUrl+'*.html'], ['html']); //,'builds/development/views/*.html'
});

//Inicia el servidor
gulp.task('webserver', function() {
  gulp.src('builds/development/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

//Arranca con la tarea default
gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);