var gulp  = require('gulp');
var paths = process.PLUGIN.paths;

gulp.task('watch', function(){
    console.log('Watching plugin')
    gulp.watch(paths.source, ['build-system'])
    gulp.watch(paths.html  , ['build-html-system'])

});

