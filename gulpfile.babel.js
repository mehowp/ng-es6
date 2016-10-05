import iGulp from 'gulp';
import iConfig from './src/config.json';
import iHelpers from './gulpfile.helpers';

global.gulp = iGulp;

global.rootdir = __dirname;
global.config = iConfig;

global.helpers = iHelpers();

global.client = config.client;
global.server = config.server;

require('require-dir')('./src/gulp-tasks');

gulp.task('default', ['watch'], () => {

});

