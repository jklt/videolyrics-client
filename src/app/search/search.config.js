// route configuration for the vl.search module
angular.module('vl.search')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/search', {
            templateUrl: 'search/searchResults.html',
            controller: 'searchResults',
            controllerAs: 'ctrl'
        });
}