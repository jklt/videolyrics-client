// controller for the /track/:trackId route
angular.module('vl.videoLyrics')
    .controller('videoLyrics', videoLyrics);

function videoLyrics(spotifyAPI, $stateParams, nowPlaying) {
    var ctrl = this;
    var trackId = $stateParams.trackId;
    ctrl.trackId = trackId;
    var albumId = $stateParams.albumId;
    ctrl.albumId = albumId;

    nowPlaying.setTrack(trackId);

    ctrl.getTrack = nowPlaying.getTrack;

    ctrl.track = spotifyAPI.getTrack(trackId)
        .then(function (data) {
            return data;
        });

}
