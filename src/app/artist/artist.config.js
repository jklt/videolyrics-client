// route configuration for the video lyrics module
angular.module('vl.artist')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/artist/:artistId', {
            templateUrl: 'artist/artist.html',
            controller: 'artist',
            controllerAs: 'ctrl'
        });
}