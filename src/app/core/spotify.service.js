// search service
angular.module('vl.core')
    .factory('spotifyAPI', spotifyAPI);

function spotifyAPI($http, $q) {
    var tracksCache = {};
    var albumsCache = {};
    // public interface:
    var service = {
        searchTracks: APIsearchTracks,
        search: APIsearch,
        getArtistAlbums: getArtistAlbums,
        getArtist: getArtist,
        getTrack: getTrack,
        getAlbum: getAlbum
    };

    var baseURL = "https://video-lyrics.herokuapp.com/1.0/proxy/spotify/";

    function APIgetTrack(id){
         return $http.get(baseURL + 'tracks/' + id)
             .then(function (data) {
                tracksCache[data.data.id] = data.data;
                return data.data;
            });
    }

    function APIgetAlbum(id){
         return $http.get(baseURL + 'albums/' + id)
             .then(function (data) {
                albumsCache[data.data.id] = data.data;
                return data.data;
            });
    }

     function getArtistAlbums(id){
         return $http.get(baseURL + 'artists/' + id + '/albums?limit=24&album_type=album,single,compilation&market=NL')
             .then(function (data) {
                return data;
            });
    }

    function getArtist(id){
          return $http.get(baseURL + 'artists/' + id)
             .then(function (data) {
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
                tracksCache[data.data.track_id] = data.data;
                return data.data;
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
                tracksCache[data.data.track_id] = data.data;
                return data.data;
            });
    }


    function getTrack(id){
        if (tracksCache[id]){
            return $q.when(tracksCache[id]);
        }else{
            return APIgetTrack(id);
        }

    }


    function getAlbum(id){
        if (albumsCache[id]){
            return $q.when(albumsCache[id]);
        }else{
            return APIgetAlbum(id);
        }

    }
    return service;
}