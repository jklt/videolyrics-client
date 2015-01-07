// route configuration for the video lyrics module
angular.module('vl.videoLyrics')
    .config(config);

function config($stateProvider) {
    $stateProvider
        .state('track', {
            url: '/albums/:albumId/tracks/:trackId',
            templateUrl: 'videoLyrics/videoLyrics.html',
            controller: 'videoLyrics',
            controllerAs: 'ctrl'
        })
        .state('album', {
            url: '/albums/:albumId',
            controller: 'album'
        });
}