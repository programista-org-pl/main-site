/// <binding AfterBuild='default' Clean='clean' />
var gulp = require('gulp');
var del = require('del');

var paths = {
    files: [
        'node_modules/@fortawesome/**/fontawesome-free/css/*.*',
        'node_modules/@fortawesome/**/fontawesome-free/js/*.*',
        'node_modules/@fortawesome/**/fontawesome-free/webfonts/*.*',

        'node_modules/*/dist/css/*.*',
        'node_modules/*/dist/js/*.*'
    ]
};

gulp.task('clean', function () {
    return del(['wwwroot/libs/**/*']);
});

gulp.task('default', function () {
    gulp.src(paths.files).pipe(gulp.dest('wwwroot/libs'));
});