angular.module('search')
    .directive('searchBox', searchBox);

function searchBox() {
    return {
        scope: {},
        templateUrl: 'search/searchBox.html',
        replace: true,
        controller: 'searchBox',
        controllerAs: 'ctrl'
    };
}