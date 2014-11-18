// route configuration for the video lyrics module
angular.module('vl.videoLyrics')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/track/:trackId', {
            templateUrl: 'videoLyrics/videoLyrics.html',
            controller: 'videoLyrics',
            controllerAs: 'ctrl'
        });
}