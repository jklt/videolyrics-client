videolyrics-client
==================

### Set up development environment
1. Make sure [node.js](http://nodejs.org) is installed.
2. Make sure [gulp.js](http://gulpjs.com) and [Bower](http://bower.io) are installed globally: run `npm -g install gulp bower` or `sudo npm -g install gulp bower`.
2. Clone this repository: run `git clone https://github.com/jklt/videolyrics-client`.
3. `cd` into the cloned `videolyrics-client` directory and run `npm install` to install all dependencies.
4. Run `gulp` while developing. This process watches files and when a file changes, it will run tests and build the application.
5. Optionally configure a [Homestead](http://laravel.com/docs/homestead) site to serve the application.

### Deploy the application
1. Make sure the Firebase Command Line Tools are installed globally: run `npm install -g firebase-tools` or `sudo npm -g install firebase-tools`.
2. `cd` into the `videolyrics-client` directory and run `firebase deploy`.


### Coding style
We use [John Papa's AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide) for the structural style
and [JSHint](http://jshint.com] is used, with the configuration suggested by John Papa's AngularJS Style Guide,
to report simple coding style violations. JSHint runs automatically with `gulp` and notifies violations via the terminal.