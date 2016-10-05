import pug from 'gulp-pug';
/* templates */

gulp.task('templates', () => {

    return gulp.src(client.templates + '**/*.jade')
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('./build/client/templates'));
});