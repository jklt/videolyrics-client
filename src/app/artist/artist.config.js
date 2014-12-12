// route configuration for the video lyrics module
angular.module('vl.artist')
    .config(config);

function config($stateProvider) {
    $stateProvider
        .state('artist', {
            url: '/artist/:artistId',
            templateUrl: 'artist/artist.html',
            controller: 'artist',
            controllerAs: 'ctrl'
        });
}