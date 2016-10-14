import pug from 'gulp-pug';
import templateCache  from 'gulp-angular-templatecache';

/* templates */

gulp.task('jade', () => {
    return gulp.src(client.templates + '**/*.jade')
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('./build/templates'));
});

gulp.task('cache-template', ['jade'], () => {
  return gulp.src([server.templates+'**/*.html', '!'+server.templates+'index.html'])
    .pipe(templateCache('templateCache.js', { 
        module:'templateCache', 
        standalone:true,
        moduleSystem: 'ES6'

    }))
    .pipe(gulp.dest(client.scripts));
});

gulp.task('templates', ['cache-template'], ()=>{

})