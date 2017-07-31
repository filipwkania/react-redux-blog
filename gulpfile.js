const gulp = require('gulp');
const pump = require('pump');
const minifyCss = require('gulp-minify-css');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');
const WebPackConfig = require('./webpack.config.js');
const gutil = require('gulp-util');

const JS_PATH = './src/**/*.js';
const STYLE_PATH = './style/**/*.scss';
const ENTRY_PATH = './src/index.js';

gulp.task('styles', (done) => {
  console.log('gulp processing scss');
  pump([
    gulp.src(STYLE_PATH),
    plumber(),
    sourcemaps.init(),
    sass(),
    concat('app.css'),
    minifyCss(),
    sourcemaps.write(),
    gulp.dest('./style'),
    livereload()
  ], done);
});

gulp.task('webpack-dev-server', () => {
    var compiler = webpack(WebPackConfig);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('default', (done) => {
  return gulp.src(ENTRY_PATH)
    .pipe(gulpWebpack(WebPackConfig))
    .pipe(gulp.dest('./'));
});

gulp.task( 'watch', ['webpack-dev-server', 'styles', 'default'], () => {
  livereload.listen();
  gulp.watch(STYLE_PATH, ['styles']);
});