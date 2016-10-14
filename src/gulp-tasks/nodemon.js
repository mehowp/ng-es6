import nodemon from 'gulp-nodemon';
import execLib from 'child_process';

gulp.task('nodemon', ['watch'], () => {
    nodemon({
        script: 'server.js',
        stdout: false, // important: this tells nodemon not to output to console
        ext: 'js',
        ignore: ["/build/*", "/src/client/*"],
        env: {
            'NODE_ENV': 'development'
        },
        tasks: []
    })
        .on('crash', () => {
            console.log('Server has occured an error.')
        })
});
