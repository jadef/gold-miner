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
import path from 'path'; // Node standard path (not needed to define in package.json)
import plumber from 'gulp-plumber'; // Pipe error patch
import rename from 'gulp-rename'; // Rename files
import sassLint from 'gulp-sass-lint'; // Linting of Sass
import sequence from 'gulp-sequence'; // Order tasks
import sourcemaps from 'gulp-sourcemaps'; // JS/CSS sourcemaps
import uglify from 'gulp-uglify'; // Minify files
import gutil from 'gulp-util'; // Various utilities like colors and noop
import watch from 'gulp-watch'; // Watching files
import webpack from 'webpack'; // Webpack - js builder
import webpackDevMiddleware from 'webpack-dev-middleware'; // webpack add on for browsersync middleware
import webpackHotMiddleware from 'webpack-hot-middleware'; // webpack add on for hot reloading


// ------ Project Settings ------
const pkg = {};

pkg.paths = {
  source : path.join(__dirname, 'source/'),
  dest: path.join(__dirname, 'public/'),
  bundle: 'app.js',
  entry: path.join(__dirname, 'source/index.js')
};

pkg.opts = {
  isProduction: false,
  browserlist: ['last 2 versions'],
  sassStyle: 'expanded',
  sourceMap: true
};

// Allows gulp --prod to be run for the compressed output
if (gutil.env.prod === true) {
  pkg.opts.isProduction  = true;
  pkg.opts.sassStyle = 'compressed';
  pkg.opts.sourceMap = false;
}

pkg.webpackSettings = {
  context: pkg.paths.source,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    pkg.paths.entry
  ],
  output: {
    path: pkg.paths.dest,
    publicPath: pkg.paths.dest,
    filename: pkg.paths.bundle
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //   debug: true
    // })

  ],
  resolve: {
      extensions: ['.js', '.json', '.jsx'],
  },
  // devtool : 'source-map',
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: [
        'react-hot-loader',
        'babel-loader',
        'webpack-module-hot-accept'
      ],
      exclude: /node_modules/
    }]
  }
};

// ------ Tasks ------

// -- Clean up
gulp.task('clean', () => {
  del([pkg.paths.dest + '**/*']).then( paths => {
    gutil.log(gutil.colors.yellow.bold('Deleted compiled files/folders:\n'), pkg.paths.join('\n'));
  });
});

// -- Static files
gulp.task('static', () => {
  return gulp.src([pkg.paths.source + 'static/**/*'])
    .pipe(gulp.dest(pkg.paths.dest));
});

// -- Build Images
gulp.task('images',  () => {
  gutil.log('Building ' + gutil.colors.yellow('all') + ' Images...');

  // TODO: don't rebuild if they exist

  gulp.src(pkg.paths.source + 'images/**/*')
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest(pkg.paths.dest + 'images/'))
    .pipe(browserSync.reload({ stream: true }))
    .on('error', error => {
      gutil.log(error);
    });
});

// -- Build CSS from Sass
gulp.task('sass', ['sass-lint'], () => {
  gutil.log('Building ' + gutil.colors.yellow(pkg.opts.sassStyle) + ' Sass...');

  return gulp.src(pkg.paths.source + 'sass/styles.scss')
    .pipe(compass({
      require: ['compass/import-once/activate'],
      sass: pkg.paths.source + 'sass/',
      css: pkg.paths.dest,
      style: pkg.opts.sassStyle,
      sourcemap: pkg.opts.sourceMap,
      comments: pkg.opts.isProduction,
      debug: pkg.opts.isProduction
    }))
    .on('error', (error) => {
      gutil.log(error);
    });
});

// -- Run processes on CSS
gulp.task('css', ['sass'],   () => {
  gutil.log('Formatting ' + gutil.colors.yellow(pkg.opts.sassStyle) + ' CSS...');

  return gulp.src(pkg.paths.dest + 'styles.css')
    .pipe(pkg.opts.sourceMap ? sourcemaps.init() : gutil.noop())
    .pipe(autoprefixer({
      browsers: pkg.opts.browserlist
    }))
    .pipe(pkg.opts.sourceMap ? sourcemaps.write('.') : gutil.noop())
    .pipe(gulp.dest(pkg.paths.dest))
    .pipe(browserSync.reload({ stream: true }))
    .on('error', error => {
      gutil.log(error);
    });
});

// ------ Utilities ------

gulp.task('sass-lint',  () => {
  return gulp.src(pkg.paths.source + 'sass/**/*.s+(a|c)ss')
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

const bundler = webpack(pkg.webpackSettings);

// -- Watch, Sync, Build... repeat
gulp.task('watch', ['build'],  () => {
  browserSync({
    notify: false,
    port: 5060,
    server: {
      baseDir: [pkg.paths.dest],
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: pkg.webpackSettings.output.publicPath,
          noInfo: true,
          stats: {
            colors: true,
            // modules: true,
            // reasons: true,
            // errorDetails: true
          }
        }),
        webpackHotMiddleware(bundler)
      ]
    },
    files: [
      pkg.paths.dest + 'styles.css'
    ]
 });

  // All the watches
  gulp.watch(pkg.paths.source + 'sass/**/*.scss', ['css']);
  gulp.watch(pkg.paths.source + 'images/**/*', ['images']);
  gulp.watch(pkg.paths.source + 'static/**/*', ['static', 'reload']);
})

// ------ Builders ------

gulp.task('compile', sequence('clean', ['images', 'css'], 'static'));
gulp.task('build', sequence('css', 'images'));
gulp.task('default', ['watch']);
