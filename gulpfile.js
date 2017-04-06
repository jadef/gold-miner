// ------ Setup ------

// -- Dependencies
var
  browserSync = require('browser-sync'), // Browser Sync
  del         = require('del'), // Delete
  fs          = require('fs'), // File System
  gulp        = require('gulp'), // Base Gulp
  autoprefixer= require('gulp-autoprefixer'), // Autoprefix css
  compass     = require('gulp-compass'), // Compass - Compile Sass
  // concat      = require('gulp-concat'), // Concatinate files
  // eslint      = require('gulp-eslint'), // Linting of JavaScript
  imagemin    = require('gulp-imagemin'), // Process Images
  order       = require('gulp-order'), // Order files
  plumber     = require('gulp-plumber'), // Pipe error patch
  sassLint    = require('gulp-sass-lint'), // Linting of Sass
  sequence    = require('gulp-sequence'), // Order tasks
  sourcemaps  = require('gulp-sourcemaps'), // JS/CSS sourcemaps
  // uglify      = require('gulp-uglify'), // JS minification
  gutil       = require('gulp-util'), // Various utilities like colors and noop
  watch       = require('gulp-watch'); // Watching files


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
