// Gulp packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Default task that only log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running...');
});

// Jshint task
gulp.task('jshint', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Build css task
gulp.task('build-css', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css/main.css'));
});

// Build js task
gulp.task('build-js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['jshint']);
});

// Default task
gulp.task('default', ['build-js']);
