'use strict';
import iGulp from 'gulp';
import iConfig from './src/config.json';
import iHelpers from './gulpfile.helpers';

global.gulp = iGulp;

global.rootdir = __dirname;
global.config = iConfig;

global.helpers = iHelpers();

global.client = config.client;
global.server = config.server;
function puts(error, stdout, stderr) { sys.puts(stdout) }
global.command = 'sudo kill -9 $(lsof -t -i:' + config.port + ')';


require('require-dir')('./src/gulp-tasks');

gulp.task('default', ['nodemon'], () => {

});

