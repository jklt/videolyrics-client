angular.module('youtube')
    .factory('youtubeSearchApi', youtubeSearchApi);

function youtubeSearchApi(youtubeSearchUri, $http, $q) {
    return {
        searchFirst: searchFirst
    };

    function searchFirst(query) {
        return $http.get(youtubeSearchUri, {
            params: {
                part: 'id',
                type: 'video',
                q: query,
                videoEmbeddable: true,
                maxResults: 1
            }
        })
            .then(function (response) {
                if (response.data.items.length > 0) {
                    return response.data.items[0].id.videoId;
                }
                return $q.reject(new Error('No YouTube search results for ' + query))
            });
    }
}