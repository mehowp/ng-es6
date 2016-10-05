import gutil from 'gulp-util';
import chalk from 'chalk';
import path from 'path';
import recursive from 'recursive-readdir';

module.exports = () => {

    let helperFunctions = {

        logOnChange: (file, cutPath, type) => {
            if (file.path) {
                file = file.path;
            }

            file = file.replace(rootdir, '');
            file = file.replace(cutPath, '');
            var isEslint = function () {

                if (type) {
                    return '';
                }
                return chalk.dim(' has changed');
            }

            var output = chalk.white('File ' + chalk.dim(file) + isEslint());
            if (!type) {
                console.log(output);
            } else {
                return output;
            }

        },

        joinPath: (matchPath) => {
            return path.join(rootdir, path.normalize(matchPath));
        }

    }

    return helperFunctions;
}

