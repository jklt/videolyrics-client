angular.module('vl.videoLyrics')
    .controller('album', album);

function album(spotifyAPI, $stateParams, navigator) {
    var albumId = $stateParams.albumId;
    spotifyAPI.getAlbum(albumId)
        .then(function (album) {
            navigator.track(albumId, album.tracks.items[0].id);
        });
}
