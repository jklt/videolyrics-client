// controller for the /track/:trackId route
angular.module('vl.videoLyrics')
    .controller('videoLyrics', videoLyrics);

function videoLyrics(spotifyAPI, $routeParams) {
    var ctrl = this;
    var trackId = $routeParams.trackId;
    ctrl.track = spotifyAPI.getTrack(trackId)
        .then(function (response) {
            return response.data;
        });
    
}
