// Gulp packages
var gulp = require('gulp');
var gutil = require('gulp-util');

// Default task that only log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running...');
});
