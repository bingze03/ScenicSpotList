var gulp=require('gulp');
var less=require('gulp-less');
var concat=require('gulp-concat');

gulp.task('less2css',()=>
    gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./src/'))
)

gulp.task('less2css-watch',()=>
    gulp.watch('./src/**/*.less',gulp.series('less2css'))
)