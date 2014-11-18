// Load dependencies
var gulp = require('gulp');                         // gulp task runner
var concat = require('gulp-concat');                // concatenates files into one
var wrapper = require('gulp-wrapper');              // adds headers and footers to files
var sass = require('gulp-sass');                    // css preprocesser
var tpl = require('gulp-angular-templatecache');    // caches AngularJS HTML templates in one JavaScript file
var uglify = require('gulp-uglify');                // minifies and uglifies JavaScript files
var ngAnnotate = require('gulp-ng-annotate');       // annotates dependency injections, otherwise uglify breaks the code
var sourcemaps = require('gulp-sourcemaps');        // creates source maps of uglified JavaScript files
var inject = require('gulp-inject');                // injects JavaScript and CSS files into index.html
var runSequence = require('run-sequence');          // run multiple tasks after eachother
var file = require('gulp-file');                    // adds a file to a stream by giving a string
var del = require('del');                           // deletes files and folders
var autoprefix = require('gulp-autoprefixer');      // prefixes CSS for features that needs prefixes in order to work
var minifyCss = require('gulp-minify-css');         // minifies CSS files
var jshint = require('gulp-jshint');                // gives hints for JavaScript files that breaks coding style rules
var livereload = require('gulp-livereload');        // automatically reloads files in the browser
var karma = require('karma').server;                // JavaScript test runner
var plumber = require('gulp-plumber');              // Makes sure errors will not stop watchers

// directories
var sourceDir = 'src';                              // source code directory
var appDir = sourceDir + '/app';                    // application specific code directory
var destDir = 'dist';                               // build destination directory
var jsDestDir = destDir + '/js';                    // destination directory for JavaScript files
var cssDestDir = destDir + '/css';                  // destination directory for CSS files
var bowerDir = 'bower_components';                  // bower (dependency manager) directory

// tasks config
var config = {
    js: {
        // config for vendor (external dependencies) related tasks
        vendor: {
            // all libraries in use
            src: [
                bowerDir + '/angular/angular.js',
                bowerDir + '/angular-route/angular-route.js',
                bowerDir + '/angular-foundation/mm-foundation-tpls.js'
            ],
            file: 'vendor.min.js',      // output file name
            dest: jsDestDir,            // output directory
            sourceRoot: 'vendor'        // source root for the source map
        },
        // config for application code related tasks
        app: {
            // first load module definitions, then the rest of the files, in order to prevent errors
            src: [
                appDir + '/**/*.module.js',
                appDir + '/**/*.js',
                '!**/*.spec.js'
            ],
            file: 'app.min.js',         // output file name
            dest: jsDestDir,            // output directory
            watch: [
                appDir + '/**/*.module.js',
                appDir + '/**/*.js',
                '!**/*.spec.js'
            ],
            wrap: true,                 // wrap each file in a self-executing closure
            di: true,                   // apply angular dependency injection annotation
            lint: true,                 // apply JSHint
            sourceRoot: 'app'           // source root for the source map
        },
        // config for html template cache related tasks
        tpl: {
            src: appDir + '/**/*.html', // all HTML files in the application directory
            file: 'tpl.js',             // output file name
            dest: jsDestDir,            // output directory
            watch: appDir + '/**/*.html'
        }
    },
    // config for css related tasks
    'css': {
        src: appDir + '/**/*.scss',     // all SCSS files in the application directory
        file: 'app.css',                // output file name
        dest: cssDestDir,               // output directory
        watch: appDir + '/app.scss'
    },
    // config for index.html related tasks
    'index': {
        src: sourceDir,                 // directory containing index.html source
        dest: destDir,                  // output directory
        // inject first the vendor files (external dependencies), then application related files
        inject: [
            jsDestDir + '/vendor.min.js',
            jsDestDir + '/*.js',
            cssDestDir + '/*.css'
        ]
    }
};

// default gulp task
gulp.task('default', function () {
    // tasks wrapped in an array run async
    runSequence('clean', ['js.vendor', 'js.app', 'js.tpl', 'css', 'index.copy'], 'index.inject', 'watch');
});

// executes all tasks in the right order
gulp.task('all', function () {
    // tasks wrapped in an array run async
    runSequence('clean', ['js.vendor', 'js.app', 'js.tpl', 'css', 'index.copy'], ['index.inject', 'test']);
});

// watch task in order to react to file changes during development
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(config.js.app.watch, ['js.app']);
    gulp.watch(config.js.tpl.watch, ['js.tpl']);
    gulp.watch(config.css.watch, ['css']);
    gulp.watch(config.index.src + '/index.html', ['index']);
    gulp.watch(destDir + '/**/*').on('change', livereload.changed);
    runKarma(false)
});

// clean task deletes the distribution directory
gulp.task('clean', function (cb) {
    del(destDir, cb);
});

// test task to test application JavaScript
gulp.task('test', function () {
    runKarma(true);
});

// js.app task compiles all application JavaScript into one file
gulp.task('js.app', function () {
    return processJs(config.js.app);
});

// js.vendor task compiles all vendor JavaScript into one file
gulp.task('js.vendor', function () {
    return processJs(config.js.vendor);
});

// js.tpl task caches all application HTML files into one JavaScript file
gulp.task('js.tpl', function () {
    return gulp.src(config.js.tpl.src)          // load all application HTML files
    // put HTML files into an angular module
        .pipe(tpl(config.js.tpl.file, {
            module: 'app'
        }))
        .pipe(file('empty', ''))                // add an empty file for when there are no HTML files
        .pipe(concat(config.js.tpl.file))       // concatenate the empty file and the template file
        .pipe(gulp.dest(config.js.tpl.dest));   // output the template file
});

// css task takes all scss files
gulp.task('css', function () {
    return gulp.src(config.css.src)             // load all SCSS files
        .pipe(sass())                           // run sass preprocessor
        .pipe(autoprefix('last 2 versions'))    // autoprefix CSS for older browsers
        .pipe(concat(config.css.file))          // concatenate CSS files
        .pipe(minifyCss())                      // minify CSS
        .pipe(gulp.dest(config.css.dest));      // output the template file
});

// simple copy-paste task for index.html
gulp.task('index.copy', function () {
    return gulp.src(config.index.src + '/index.html')
        .pipe(gulp.dest(config.index.dest))
});

// injects <script src=".."> and <link rel="stylesheet" href=".."> in index.html
gulp.task('index.inject', function () {
    return gulp.src(config.index.dest + '/index.html')
        .pipe(inject(gulp.src(config.index.inject), {
            relative: true
        }))
        .pipe(gulp.dest(config.index.dest))
});

// runs both index.html related tasks in sequence
gulp.task('index', function () {
    runSequence('index.copy', 'index.inject');
});

// helper function for JavaScript processing
function processJs(config) {
    var stream = gulp.src(config.src);

    function pipe(process) {
        stream = stream.pipe(process)
    }
    pipe(plumber()) // don't stop gulp watchers on error

    // report coding style violations
    if (config.lint) {
        pipe(jshint('.jshintrc'));
        pipe(jshint.reporter('default'));
    }

    pipe(sourcemaps.init());

    // wrap each file in a anonymous self-executing closure
    if (config.wrap) {
        pipe(wrapper({
            header: "(function () {'use strict';",
            footer: "})();"
        }));
    }

    // annotate AngularJS dependency injection, otherwise uglifying breaks the code
    if (config.di) {
        pipe(ngAnnotate());
    }

    pipe(concat(config.file));
    pipe(uglify());
    pipe(sourcemaps.write('.', {
        includeContent: true,
        sourceRoot: '/' + config.sourceRoot
    }));
    pipe(gulp.dest(config.dest));

    return stream;
}

function runKarma(singleRun) {
    function mapPaths(paths, watched) {
        return paths.map(function (path) {
            return {
                pattern: path,
                watched: watched
            }
        })
    }
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        files: mapPaths(config.js.vendor.src, false)
            .concat(mapPaths([bowerDir + '/angular-mocks/angular-mocks.js'], false))
            .concat(mapPaths([appDir + '/**/*.module.js'], true))
            .concat(mapPaths([appDir + '/**/*.js'], true)),
        singleRun: singleRun
    });
}