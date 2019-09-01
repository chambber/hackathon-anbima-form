var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('watch', function() {
    gulp.watch('src/images/*.png', gulp.series('images'));
    gulp.watch('src/js/*.js', gulp.series('js'));
    gulp.watch('src/scss/*.scss', gulp.series('css'));
    gulp.watch('src/html/*.html', gulp.series('html'));
});