var gulp = require('gulp');

gulp.task('default', function() {
    console.log('%cCheck it out yo', "background-color: #ffdd2d; color: #333; font-size: 16px;");
});

gulp.task('copy', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('assets'))
});