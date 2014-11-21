angular.module('youtube')
    .factory('youtubeSearchApi', youtubeSearchApi);

function youtubeSearchApi($http, $q) {
    return {
        searchFirst: searchFirst
    };

    function searchFirst(query) {
        return $http.get('https://content.googleapis.com/youtube/v3/search', {
            params: {
                part: 'id',
                type: 'video',
                q: query,
                videoEmbeddable: true,
                key: 'AIzaSyAnAt5FyQ5UEv4nvLq83hD0UNCH0Ln-Sto',
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