// controller for the /track/:trackId route
angular.module('vl.videoLyrics')
    .controller('videoLyrics', videoLyrics);

function videoLyrics(spotifyAPI, $routeParams) {
    var ctrl = this;
    var trackId = $routeParams.trackId;
    ctrl.trackId = trackId;
    var albumId = $routeParams.albumId;
    ctrl.albumId = albumId;
    ctrl.track = spotifyAPI.getTrack(trackId)
        .then(function (data) {
            return data;
        });
    
}
