// controller for the /track/:trackId route
angular.module('vl.videoLyrics')
    .controller('videoLyrics', videoLyrics);

function videoLyrics(musixMatchAPI, $routeParams) {
    var ctrl = this;
    var trackId = $routeParams.trackId;
    ctrl.track = musixMatchAPI.get(trackId)
        .then(function (response) {
            return response.data;
        });
    
}
