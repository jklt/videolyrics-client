angular.module('vl.videoLyrics')
    .controller('trackList', trackList);

function trackList(spotifyAPI) {
    var ctrl = this;

    spotifyAPI.getAlbum(ctrl.albumId)
        .then(function (data) {
            ctrl.album = data;
            ctrl.tracks = data.tracks.items;
        });

}