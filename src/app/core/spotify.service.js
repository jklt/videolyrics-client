// search service
angular.module('vl.core')
    .factory('spotifyAPI', spotifyAPI);

function spotifyAPI($http, $q) {
    var cache = {};
    // public interface:
    var service = {
        searchTracks: APIsearchTracks,
        search: APIsearch,
        getArtistAlbums: getArtistAlbums,
        getArtist: getArtist,
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

     function getArtistAlbums(id){
         return $http.get(baseURL + 'artists/' + id + '/albums?limit=24&album_type=album&market=ES')
             .then(function (data) {
                cache[data.data.id] = data.data;
                return data;
            });
    }

    function getArtist(id){
          return $http.get(baseURL + 'artists/' + id)
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