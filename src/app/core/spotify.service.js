// search service
angular.module('vl.core')
    .factory('spotifyAPI', spotifyAPI);

function spotifyAPI($http, $q) {
    var cache = {};
    // public interface:
    var service = {
        searchTracks: APIsearchTracks,
        search: APIsearch,
        getTrack: getTrack
    };

    var baseURL = "https://video-lyrics.herokuapp.com/1.0/proxy/spotify/";

    function APIgetTrack(id){
         return $http.get(baseURL + 'tracks/' + id)
             .then(function (data) {
                cache[data.data.id] = data.data;
                return data;
            });
    }

      function APIsearch(name){
         return $http.get(baseURL + 'search', {
            params: {
                q: name,
                type: "album,artist",
                limit:"6"
            }
        }).then(function (data) {
                cache[data.data.track_id] = data.data;
                return data;
            });
    }

    function APIsearchTracks(name){
         return $http.get(baseURL + 'search', {
            params: {
                q: name,
                type: "track",
                limit:"15"
            }
        }).then(function (data) {
                cache[data.data.track_id] = data.data;
                return data;
            });
    }


    function getTrack(id){
        if (cache[id]){
            return $q.when(cache[id]);
        }else{
            return APIgetTrack(id);
        }

    }
    return service;
}