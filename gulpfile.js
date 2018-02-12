const gulp = require('gulp');

gulp.task('default', ['copy']);

gulp.task('copy', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('assets'))
});