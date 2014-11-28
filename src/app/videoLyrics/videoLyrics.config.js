// route configuration for the video lyrics module
angular.module('vl.videoLyrics')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/albums/:albumId/tracks/:trackId', {
            templateUrl: 'videoLyrics/videoLyrics.html',
            controller: 'videoLyrics',
            controllerAs: 'ctrl'
        })
        .when('/albums/:albumId', {
            templateUrl: 'videoLyrics/videoLyrics.html',
            controller: 'videoLyrics',
            controllerAs: 'ctrl'
        });
}