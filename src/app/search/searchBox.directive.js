// define <vl-search-box></vl-search-box> directive
angular.module('vl.search')
    .directive('vlSearchBox', vlSearchBox);

function vlSearchBox() {
    return {
        scope: {},
        templateUrl: 'search/searchBox.html',
        replace: true,
        controller: 'searchBox',
        controllerAs: 'ctrl',
        bindToController: true
    };
}