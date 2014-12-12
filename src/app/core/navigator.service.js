angular.module('vl.core')
    .factory('navigator', navigator);

function navigator($state) {

    return {
        track: track
    };

    function track(albumId, trackId) {
        $state.go('track', {
            albumId: albumId,
            trackId: trackId
        })
    }

}