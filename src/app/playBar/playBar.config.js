// route configuration for the vl.search module
angular.module('vl.playBar')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/search', {
            templateUrl: 'search/searchResults.html',
            controller: 'searchResults',
            controllerAs: 'ctrl'
        });
}