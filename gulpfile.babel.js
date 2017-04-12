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
import buffer from 'vinyl-buffer'; // Use buffers on files
import source from 'vinyl-source-stream'; // Text streams in pipeline
import watchify from 'watchify'; // Watch mode for browserify builds


// ------ Project Settings ------

const paths = {
  source : 'source/',
  dest: 'public/',

  bundle: 'app.js',
  entry: 'source/index.js'
};

const opts = {
  isProduction: false,
  browserlist: ['last 2 versions'],
  sassStyle: 'expanded',
  sourceMap: true
};

const customOpts = {
  entries: [paths.entry],
  debug: true,
  cache: {},
  packageCache: {}
};

const buildOpts = Object.assign({}, watchify.args, customOpts);

// Allows gulp --prod to be run for the compressed output
if (gutil.env.prod === true) {
  opts.isProduction  = true;
  opts.sassStyle = 'compressed';
  opts.sourceMap = false;
}


// ------ Tasks ------

// -- Clean up
gulp.task('clean', () => {
  del([paths.dest + '**/*']).then( paths => {
    gutil.log(gutil.colors.yellow.bold('Deleted compiled files/folders:\n'), paths.join('\n'));
  });
});

// -- Starter files
gulp.task('start', () => {
  return gulp.src([paths.source + 'start/**/*'])
    .pipe(gulp.dest(paths.dest));
});

// -- Build JS

// -- Build Images
gulp.task('images',  () => {
  gutil.log('Building ' + gutil.colors.yellow('all') + ' Images...');

  // TODO: don't rebuild if they exist

  gulp.src(paths.source + 'images/**/*')
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest(paths.dest + 'images/'))
    .pipe(browserSync.reload({ stream: true }))
    .on('error', error => {
      gutil.log(error);
    });
});

// -- Build CSS from Sass
gulp.task('sass', ['sass-lint'], () => {
  gutil.log('Building ' + gutil.colors.yellow(opts.sassStyle) + ' Sass...');

  return gulp.src(paths.source + 'sass/styles.scss')
    .pipe(compass({
      require: ['compass/import-once/activate'],
      sass: paths.source + 'sass/',
      css: paths.dest,
      style: opts.sassStyle,
      sourcemap: opts.sourceMap,
      comments: opts.isProduction,
      debug: opts.isProduction
    }))
    .on('error', (error) => {
      gutil.log(error);
    });
});

// -- Run processes on CSS
gulp.task('css', ['sass'],   () => {
  gutil.log('Formatting ' + gutil.colors.yellow(opts.sassStyle) + ' CSS...');

  return gulp.src(paths.dest + 'styles.css')
    .pipe(opts.sourceMap ? sourcemaps.init() : gutil.noop())
    .pipe(autoprefixer({
      browsers: opts.browserlist
    }))
    .pipe(opts.sourceMap ? sourcemaps.write('.') : gutil.noop())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({ stream: true }))
    .on('error', error => {
      gutil.log(error);
    });
});

// ------ Utilities ------

gulp.task('sass-lint',  () => {
  return gulp.src(paths.source + 'sass/**/*.s+(a|c)ss')
    .pipe(sassLint({
      files: {
        ignore: '**/vendor/**/*.s@(a|c)ss'
      },
      configFile: './.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('reload',  () => {
  browserSync.reload();
})

// ------ Watchers ------

// -- Watch, Sync, Build... repeat
gulp.task('watch', ['build'],  () => {
  browserSync({
    notify: false,
    port: 5060,
    server: {
      baseDir: [paths.dest]
    }
  });

  // All the watches
  gulp.watch(paths.source + 'sass/**/*.scss', ['css']);
  gulp.watch(paths.source + 'images/**/*', ['images']);
  gulp.watch(paths.source + 'start/**/*', ['start', 'reload']);

});

gulp.task('watchify', () => {
  const bundler = watchify(browserify(buildOpts));

  function rebundle() {
    return bundler.bundle()
      .pipe(source(paths.bundle))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dest))
      .on('error', error => {
        gutil.log(error);
      });
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', () => {
  browserify(paths.entry, { debug: true })
  .transform(babelify)
  .bundle()
  .pipe(source(paths.bundle))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.dest));
});


// ------ Builders ------

gulp.task('default', ['watch']);
gulp.task('compile', sequence('clean', ['images', 'css'], 'start'));
gulp.task('build', sequence('watchify', 'images', 'css'));
