angular.module('search')
    .factory('searchEngine', searchEngine);

function searchEngine($http) {
    return {
        search: search
    };

    function search(query) {
        $http.get('https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.search', {
            params: {
                query: query
            },
            headers: {
                'X-Mashape-Key': 'ImIOFOF9UimshzRZU3z2FHDt54tzp1TVWUojsn8fJ3hyg8GxKd'
            }
        })
            .then(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error)
            })
    }
}