// controller for <vl-search-box> directive
angular.module('vl.search')
    .controller('searchBox', searchBox);

function searchBox($location) {
    var ctrl = this;

    // public interface:
    ctrl.search = search;
    ctrl.query = '';

    function search() {
        // go to route /search?q=Search+query
        $location.path('/search');
        $location.search('q', ctrl.query);
    }
}
