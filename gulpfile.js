var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('sync', function (){
  browserSync.init({
    proxy: "index.html",
    files: "*.css, *.js"
  });
});