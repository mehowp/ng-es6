import sourcemaps from 'gulp-sourcemaps';

import babelify from 'babelify';
import browserify from 'browserify';
import watchify from 'watchify';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import gutil from 'gulp-util';
import chalk from 'chalk';

import eslint from 'gulp-eslint';
import friendlyFormatter from 'eslint-friendly-formatter';


gulp.task("lint", () => {
    gulp.src([client.scripts + "main.js", client.scripts + "**/*.js", "!**/templateCache.js"])
        .pipe(eslint())
        // .pipe(eslint.format(friendlyFormatter))
        .pipe(eslint.result(result => {
            // Called for each ESLint result. 


            if (!!result.messages.length) {
                gutil.log(`${chalk.cyan(helpers.logOnChange(result.filePath, '/src/client', 'eslint'))}`);
            
            if (!!result.warningCount) {
                gutil.log(`Warnings: ${chalk.yellow(result.warningCount)}`);
            }
            if (!!result.errorCount) {
                gutil.log(`Errors: ${chalk.red(result.errorCount)}`);
                
                result.messages.map(function(e){
                var line = e.line;
                var column = e.column;
                gutil.log('# Linter: '+chalk.red(e.message.slice(0, -1)) + ' at ' + chalk.yellow(line + ':' + column));

                })
            }else{
                gutil.log(chalk.green('No issues!'));
            }
        }

        }));
});

gulp.task('build:javascript', ['lint'], () => {
    let b = watchify(browserify({
        entries: client.scripts + 'main.js',
        debug: true
    })
        .transform({ extensions: ['js'] }, babelify));

    let stream =  b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // Add transformation tasks to the pipeline here.
     //   .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/scripts/'));

        stream.on('error', function() {
            gutil.log(chalk.red('Error!!'));
        });

})