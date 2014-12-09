angular.module('vl.videoLyrics')
    .controller('trackList', trackList);

function trackList(spotifyAPI) {
    var ctrl = this;

    ctrl.getScreenheight = function(){
    	console.log(window.innerHeight);
    	return window.innerHeight - 100;
    }
    spotifyAPI.getAlbum(ctrl.albumId)
        .then(function (data) {
            ctrl.album = data;
            ctrl.tracks = data.tracks.items;
        });

}