/* defaults */
import gulp from 'gulp';
import config from './src/config.json';

import chalk from 'chalk';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';


const client = config.client;
const sever = config.server;


gulp.task('default', ['build:client'], () => { });
gulp.task('watch', ['build:client'], () => {

    gulp.watch(client.styles + 'util/**/*.scss', ['sass:utilities'])
        .on('change', (file) => {
            fileHasChangedMessage(file.path);
        });

    gulp.watch(client.styles + 'defaults/**/*.scss', ['sass:defaults'])
        .on('change', (file) => {
            fileHasChangedMessage(file.path);
        });

    gulp.watch(client.templates + '**/*.jade', ['templates'])
        .on('change', (file) => {
            fileHasChangedMessage(file.path);
        });
});



/* build client */
gulp.task('build:client', ['templates', 'sass:defaults', 'sass:utilities'], () => {

});

/* templates */
gulp.task('templates', () => {

    return gulp.src(client.templates + '**/*.jade')
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('./build/client/templates'));
});

/* styles */
gulp.task('sass:utilities', () => {
    return gulp.src(client.styles + 'util/utilities.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/client/styles'))
})

gulp.task('sass:defaults', () => {
    return gulp.src(client.styles + 'defaults/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/client/styles'))
})

/* help functions */
const outputTime = () => {

    var d = new Date(),
        hours = d.getHours(),
        minutes = d.getMinutes(),
        seconds = d.getSeconds();

    return chalk.dim('[' + hours + ':' + minutes + ':' + seconds + ']');
}

const fileHasChangedMessage = (file) => {

    file = file.replace(__dirname, '');
    file = file.replace('/src/client', '');

    console.log(outputTime() + chalk.yellow(chalk.dim(' File ') + file + chalk.dim(' has changed')));
}

