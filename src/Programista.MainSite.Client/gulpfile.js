/// <binding AfterBuild='default' Clean='clean' />
var gulp = require('gulp');
var del = require('del');

var paths = {
    files: [
        'node_modules/@fortawesome/**/fontawesome-free/css/*.*',
        'node_modules/@fortawesome/**/fontawesome-free/js/*.*',
        'node_modules/@fortawesome/**/fontawesome-free/webfonts/*.*',

        'node_modules/*bootstrap/dist/css/*.css',
        'node_modules/*bootstrap/dist/js/*.js',

        'node_modules/*jquery/dist/*.js',
        'node_modules/*jquery.easing/*.js',

        'node_modules/*startbootstrap-creative/css/*.*',
        'node_modules/*startbootstrap-creative/js/*.*',
        'node_modules/*startbootstrap-creative/img/*.*',

        'node_modules/*magnific-popup/dist/*.*'
    ]
};

gulp.task('clean', function () {
    return del(['wwwroot/libs/**/*']);
});

gulp.task('default', function () {
    gulp.src(paths.files).pipe(gulp.dest('wwwroot/libs'));
});