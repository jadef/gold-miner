// ------ Setup ------

// -- Dependencies
import babelify from 'babelify'; // Babel browserify transform
import browserify from 'browserify'; // Build require environment
import browserSync from 'browser-sync'; // Browser Sync
import del from 'del'; // Delete
import fs from 'fs'; // File System
import gulp from 'gulp'; // Base Gulp
import autoprefixer from 'gulp-autoprefixer'; // Autoprefix css
import compass from 'gulp-compass'; // Compass - Compile Sass
import imagemin from 'gulp-imagemin'; // Process Images
import order from 'gulp-order'; // Order files
import plumber from 'gulp-plumber'; // Pipe error patch
import rename from 'gulp-rename'; // Rename files
import sassLint from 'gulp-sass-lint'; // Linting of Sass
import sequence from 'gulp-sequence'; // Order tasks
import sourcemaps from 'gulp-sourcemaps'; // JS/CSS sourcemaps
import uglify from 'gulp-uglify'; // Minify files
import gutil from 'gulp-util'; // Various utilities like colors and noop
import watch from 'gulp-watch'; // Watching files
import rimraf from 'rimraf'; // Deletion module
import buffer from 'vinyl-buffer'; // Use buffers on files
import source from 'vinyl-source-stream'; // Text streams in pipeline
import watchify from 'watchify'; // Watch mode for browserify builds


// ------ Project Settings ------

var
  src          = './source/',
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
  return gulp.src([src + 'start/**/*'])
    .pipe(gulp.dest(dest));
});

// -- Build JS

// -- Build Images
gulp.task('images', function() {
  gutil.log('Building ' + gutil.colors.yellow('all') + ' Images...');

  // TODO: don't rebuild if they exist

  gulp.src(src + 'images/**/*')
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

  return gulp.src(src + 'sass/styles.scss')
    .pipe(compass({
      require: ['compass/import-once/activate'],
      sass: src + 'sass/',
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
  return gulp.src(src + 'sass/**/*.s+(a|c)ss')
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
  gulp.watch(src + 'sass/**/*.scss', ['css']);
  gulp.watch(src + 'images/**/*', ['images']);
  gulp.watch(src + 'start/**/*', ['start', 'reload']);

});


// ------ Builders ------

gulp.task('default', ['watch']);
gulp.task('compile', sequence('clean', ['images', 'css'], 'start'));
gulp.task('build', sequence('images', 'css'));
