// search service
angular.module('vl.core')
    .factory('musixMatchAPI', musixMatchAPI);

function musixMatchAPI($http, $q) {
    var cache = {};
    // public interface:
    var service = {
        search: searchTrack,
        get: getTrack,
        getLyrs: getLyrics,
        getSubs: getSubtitles
    };


    function searchTrack(query) {
        return $http.get('https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.search', {
            params: {
                q: query
            },
            headers: {
                'X-Mashape-Key': 'ImIOFOF9UimshzRZU3z2FHDt54tzp1TVWUojsn8fJ3hyg8GxKd'
            }
        }).then(function (data) {
                for (var index = 0; index < data.data.length; index++){
                    var obj = data.data[index];
                    cache[obj.track_id] = obj;
                }
                return data;
            });
    }

    function getTrackInfo(id, objective){
         return $http.get('https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.' + objective, {
            params: {
                track_id: id
            },
            headers: {
                'X-Mashape-Key': 'ImIOFOF9UimshzRZU3z2FHDt54tzp1TVWUojsn8fJ3hyg8GxKd'
            }
        }).then(function (data) {
                cache[data.data.track_id] = data.data;
                return data;
            });
    }

    function APIget(id){
         return getTrackInfo(id, 'get');
    }

    function getTrack(id){
        if (cache[id]){
            return $q.when(cache[id]);
        }else{
            return APIget(id);
        }

    }

    function getLyrics(id){
         return getTrackInfo(id, 'lyrics.get');
    }

    function getSubtitles(id){
         return getTrackInfo(id, 'subtitles.get');
    }
    return service;
}