angular.module('search')
    .controller('searchBox', searchBox);

function searchBox(searchEngine) {
    var ctrl = this;
    ctrl.search = search;
    ctrl.query = '';

    function search() {
        searchEngine.search(ctrl.query)
    }
}
