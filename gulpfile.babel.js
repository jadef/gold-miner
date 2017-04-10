// ------ Setup ------

// -- Dependencies
import browserSync from 'browser-sync'; // Browser Sync
import del from 'del'; // Delete
import fs from 'fs'; // File System
import gulp from 'gulp'; // Base Gulp
import autoprefixer from 'gulp-autoprefixer'; // Autoprefix css
import compass from 'gulp-compass'; // Compass - Compile Sass
import imagemin from 'gulp-imagemin'; // Process Images
import order from 'gulp-order'; // Order files
import plumber from 'gulp-plumber'; // Pipe error patch
import sassLint from 'gulp-sass-lint'; // Linting of Sass
import sequence from 'gulp-sequence'; // Order tasks
import sourcemaps from 'gulp-sourcemaps'; // JS/CSS sourcemaps
import gutil from 'gulp-util'; // Various utilities like colors and noop
import watch from 'gulp-watch'; // Watching files

// import gulp from 'gulp';
// import autoprefixer from 'autoprefixer';
// import browserify from 'browserify';
// import watchify from 'watchify';
// import source from 'vinyl-source-stream';
// import buffer from 'vinyl-buffer';
// import eslint from 'gulp-eslint';
// import babelify from 'babelify';
// import uglify from 'gulp-uglify';
// import rimraf from 'rimraf';
// import notify from 'gulp-notify';
// import browserSync, { reload } from 'browser-sync';
// import sourcemaps from 'gulp-sourcemaps';
// import postcss from 'gulp-postcss';
// import rename from 'gulp-rename';
// import nested from 'postcss-nested';
// import vars from 'postcss-simple-vars';
// import extend from 'postcss-simple-extend';
// import cssnano from 'cssnano';
// import htmlReplace from 'gulp-html-replace';
// import imagemin from 'gulp-imagemin';
// import pngquant from 'imagemin-pngquant';
// import runSequence from 'run-sequence';
// import ghPages from 'gulp-gh-pages';


// ------ Project Settings ------

var
  source          = './source/',
  dest            = './public/',
  isProduction    = false,
  browserlist     = ['last 2 versions'],
  sassStyle       = 'expanded',
  sourceMap       = true;

// Allows gulp --prod to be run for the compressed output
if (gutil.env.prod === true) {
  isProduction    = true;
  sassStyle       = 'compressed';
  sourceMap       = false;
}


// ------ Tasks ------

// -- Clean up
gulp.task('clean', function() {
  del([dest + '**/*']).then( paths => {
    gutil.log(gutil.colors.yellow.bold('Deleted compiled files/folders:\n'), paths.join('\n'));
  });
});

// -- Starter files
gulp.task('start', function() {
  return gulp.src([source + 'start/**/*'])
    .pipe(gulp.dest(dest));
});

// -- Build JS

// -- Build Images
gulp.task('images', function() {
  gutil.log('Building ' + gutil.colors.yellow('all') + ' Images...');

  // TODO: don't rebuild if they exist

  gulp.src(source + 'images/**/*')
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest(dest + 'images/'))
    .pipe(browserSync.reload({ stream: true }))
    .on('error', function (error) {
      gutil.log(error);
    });
});

// -- Build CSS from Sass
gulp.task('sass', ['sass-lint'], function() {
  gutil.log('Building ' + gutil.colors.yellow(sassStyle) + ' Sass...');

  return gulp.src(source + 'sass/styles.scss')
    .pipe(compass({
      require: ['compass/import-once/activate'],
      sass: source + 'sass/',
      css: dest,
      style: sassStyle,
      sourcemap: sourceMap,
      comments: isProduction,
      debug: isProduction
    }))
    .on('error', function (error) {
      gutil.log(error);
    });
});

// -- Run processes on CSS
gulp.task('css', ['sass'],  function() {
  gutil.log('Formatting ' + gutil.colors.yellow(sassStyle) + ' CSS...');

  return gulp.src(dest + 'styles.css')
    .pipe(sourceMap ? sourcemaps.init() : gutil.noop())
    .pipe(autoprefixer({
      browsers: browserlist
    }))
    .pipe(sourceMap ? sourcemaps.write('.') : gutil.noop())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({ stream: true }))
    .on('error', function (error) {
      gutil.log(error);
    });
});

// ------ Utilities ------

gulp.task('sass-lint', function () {
  return gulp.src(source + 'sass/**/*.s+(a|c)ss')
    .pipe(sassLint({
      files: {
        ignore: '**/vendor/**/*.s@(a|c)ss'
      },
      configFile: './.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('reload', function() {
  browserSync.reload();
})

// ------ Watchers ------

// -- Watch, Sync, Build... repeat
gulp.task('watch', ['build'], function() {
  browserSync({
    notify: false,
    port: 5060,
    server: {
      baseDir: [dest]
    }
  });

  // All the watches
  gulp.watch(source + 'sass/**/*.scss', ['css']);
  gulp.watch(source + 'images/**/*', ['images']);
  gulp.watch(source + 'start/**/*', ['start', 'reload']);

});


// ------ Builders ------

gulp.task('default', ['watch']);
gulp.task('compile', sequence('clean', ['images', 'css'], 'start'));
gulp.task('build', sequence('images', 'css'));
