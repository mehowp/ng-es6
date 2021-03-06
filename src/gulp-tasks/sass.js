import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';

/* post css packages*/
import autoprefixer from 'autoprefixer';
import splitSelectors from 'postcss-combine-duplicated-selectors';
import packMediaQuery from 'css-mqpacker';
import discardUnused from 'postcss-discard-unused';
import discardDuplicates from 'postcss-discard-duplicates';

let processors = [autoprefixer, splitSelectors, 
                packMediaQuery, discardUnused, discardDuplicates];


gulp.task('sass:utilities', () => {
    return gulp.src([client.styles + 'variables.scss', client.styles + 'util/utilities.scss'])
        //.pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(postcss(processors))
        //.pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/styles'))
})

gulp.task('sass:defaults', () => {
    return gulp.src(client.styles + 'defaults/main.scss')
       // .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(postcss(processors))
      //  .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/styles'))
})
