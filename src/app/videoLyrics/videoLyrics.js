// controller for the /track/:trackId route
angular.module('vl.videoLyrics')
    .controller('videoLyrics', videoLyrics);

function videoLyrics(spotifyAPI, $routeParams, nowPlaying) {
    var ctrl = this;
    var trackId = $routeParams.trackId;
    ctrl.trackId = trackId;
    var albumId = $routeParams.albumId;
    ctrl.albumId = albumId;

    nowPlaying.setTrack(trackId);

    ctrl.getTrack = nowPlaying.getTrack;

    ctrl.track = spotifyAPI.getTrack(trackId)
        .then(function (data) {
            return data;
        });

}
