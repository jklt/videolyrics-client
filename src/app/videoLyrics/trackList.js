angular.module('vl.videoLyrics')
    .controller('trackList', trackList);

function trackList(nowPlaying) {
    var ctrl = this;

    ctrl.getTrack = nowPlaying.getTrack;
    ctrl.getAlbum = nowPlaying.getAlbum;

}