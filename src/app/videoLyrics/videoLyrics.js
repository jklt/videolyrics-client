// controller for the /track/:trackId route
angular.module('vl.videoLyrics')
    .controller('videoLyrics', videoLyrics);

function videoLyrics($routeParams) {
    var ctrl = this;
    var trackId = $routeParams.trackId;
    // dummy data
    ctrl.track = {
        id: trackId,
        title: 'Track ' + trackId,
        artist: 'Artist Name',
        lyrics: 'Lyrics lyrics\n\nlalala'
    };
}
