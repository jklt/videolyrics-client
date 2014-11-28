// search service
angular.module('chartLyrics')
    .factory('chartLyricsAPI', chartLyricsAPI);

function chartLyricsAPI(chartLyricsUri, $http, $q) {
    return {
        searchLyric: searchLyric,
        searchLyricDirect: searchLyricDirect,
        searchLyricText: searchLyricText,
        getLyric: getLyric
    };

    function searchLyric(artist, song){
        return $http.get(chartLyricsUri + 'SearchLyric', {
            params: {
                artist: artist,
                song: song
            }
        })
            .then(function (response) {
                return response;
            });
    }

    function searchLyricDirect(artist, song){
        return $http.get(chartLyricsUri + 'SearchLyricDirect', {
            params: {
                artist: artist,
                song: song
            }
        })
            .then(function (response) {
                return response;
            });
    }

    function searchLyricText(lyricText){
        return $http.get(chartLyricsUri + 'SearchLyricText', {
            params: {
                lyricText: lyricText
            }
        })
            .then(function (response) {
                return response;
            });
    }

    function getLyric(lyricId, lyricCheckSum){
        return $http.get(chartLyricsUri + 'GetLyric', {
            params: {
                lyricId: lyricId,
                lyricCheckSum: lyricCheckSum
            }
        })
            .then(function (response) {
                return response;
            });
    }
}