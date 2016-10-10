import nodemon from 'gulp-nodemon';
gulp.task('nodemon', ['watch'], ()=>{
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ["build/*", "src/client/*"],
        env: {
            'NODE_ENV': 'development'
        },
        tasks: []
    })
});
