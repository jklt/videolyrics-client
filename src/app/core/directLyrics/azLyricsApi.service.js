angular.module('azLyrics')
    .factory('azLyricsAPI', azLyricsAPI);

function azLyricsAPI(azLyricsUri, $http, $q) {
    return {
        getLyrics: getLyrics
    };

    function getLyrics(artist, song){
        return $http.get(azLyricsUri + '/' + artist + '/' + song)
            .then(function (response) {
                return response;
            });
    }
}