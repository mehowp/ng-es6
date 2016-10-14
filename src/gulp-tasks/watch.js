gulp.task('watch', ['build:client'], () => {


    gulp.watch([client.styles + 'util/**/*.scss',
        client.styles + 'variables.scss'], ['sass:utilities'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });

    gulp.watch([client.styles + 'defaults/**/*.scss',
        client.styles + 'variables.scss'], ['sass:defaults'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });

    gulp.watch(client.templates + '**/*.jade', ['build:javascript'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });

    gulp.watch([client.scripts + '**/*.js', '!**/templateCache.js'], ['build:javascript'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });
});