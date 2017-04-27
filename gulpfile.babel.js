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

const paths = {
  source : path.join(__dirname, 'source/'),
  dest: path.join(__dirname, 'public/'),
  bundle: 'app.js',
  entry: path.join(__dirname, 'source/index.js')
};

const opts = {
  isProduction: false,
  browserlist: ['last 2 versions'],
  sassStyle: 'expanded',
  sourceMap: true
};

// Allows gulp --prod to be run for the compressed output
if (gutil.env.prod === true) {
  opts.isProduction  = true;
  opts.sassStyle = 'compressed';
  opts.sourceMap = false;
}

const webpackSettings = {
  context: paths.source,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    paths.entry
  ],
  output: {
    path: paths.dest,
    publicPath: paths.dest,
    filename: paths.bundle
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
  del([paths.dest + '**/*']).then( paths => {
    gutil.log(gutil.colors.yellow.bold('Deleted compiled files/folders:\n'), paths.join('\n'));
  });
});

// -- Starter files
gulp.task('static', () => {
  return gulp.src([paths.source + 'static/**/*'])
    .pipe(gulp.dest(paths.dest));
});

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

const bundler = webpack(webpackSettings);

// -- Watch, Sync, Build... repeat
gulp.task('watch', ['build'],  () => {
  browserSync({
    notify: false,
    port: 5060,
    server: {
      baseDir: [paths.dest],
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackSettings.output.publicPath,
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
      paths.dest + 'styles.css'
    ]
 });

  // All the watches
  gulp.watch(paths.source + 'sass/**/*.scss', ['css']);
  gulp.watch(paths.source + 'images/**/*', ['images']);
  gulp.watch(paths.source + 'static/**/*', ['static', 'reload']);
})

// ------ Builders ------

gulp.task('compile', sequence('clean', ['images', 'css'], 'static'));
gulp.task('build', sequence('css', 'images'));
gulp.task('default', ['watch']);
