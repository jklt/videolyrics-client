angular.module('vl.videoLyrics')
    .controller('trackList', trackList);

function trackList(nowPlaying) {
    var ctrl = this;

    ctrl.getTrack = nowPlaying.getTrack;
    ctrl.getAlbum = nowPlaying.getAlbum;

    ctrl.getScreenheight = function(){
    	console.log(window.innerHeight);
    	return window.innerHeight - 100;
    };

}