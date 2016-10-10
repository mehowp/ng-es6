gulp.task('watch', ['build:client'], () => {

    gulp.watch(client.styles + '*.scss', ['sass:utilities'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });

    gulp.watch(client.styles + 'util/**/*.scss', ['sass:utilities'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });

    gulp.watch(client.styles + 'defaults/**/*.scss', ['sass:defaults'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });

    gulp.watch(client.templates + '**/*.jade', ['templates'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });

    gulp.watch(client.scripts + '**/*.js', ['build:javascript', 'templates'])
        .on('change', (file) => {
            helpers.logOnChange(file, '/src/client');
        });
});