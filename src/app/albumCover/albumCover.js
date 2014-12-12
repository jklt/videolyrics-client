angular.module('vl.albumCover')
    .controller('albumCover', albumCover);

function albumCover(nowPlaying) {
    var ctrl = this;
    ctrl.getTrack = nowPlaying.getTrack;
    ctrl.getAlbum = nowPlaying.getAlbum;
}