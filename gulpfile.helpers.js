import gutil from 'gulp-util';
import chalk from 'chalk';
import path from 'path';
import recursive from 'recursive-readdir';

module.exports = () => {

    let helperFunctions = {

        logOnChange: (file, cutPath) => {
            file = file.path;

            file = file.replace(__dirname, '');
            file = file.replace(cutPath, '');

            gutil.log(chalk.yellow(chalk.dim('File ') + chalk.red(file) + chalk.dim(' has changed')));
        },

        joinPath: (matchPath) => {
            return path.join(rootdir, path.normalize(matchPath));
        }

    }

    return helperFunctions;
}

