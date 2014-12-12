// route configuration for the vl.search module
angular.module('vl.search')
    .config(config);

function config($stateProvider) {
    $stateProvider
        .state('search', {
            url: '/search?q',
            templateUrl: 'search/searchResults.html',
            controller: 'searchResults',
            controllerAs: 'ctrl',
            reloadOnSearch: true
        });
}