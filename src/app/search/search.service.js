angular.module('search')
    .factory('searchEngine', searchEngine);

function searchEngine() {
    return {
        search: search
    };

    function search(query) {
        console.log(query)
    }
}