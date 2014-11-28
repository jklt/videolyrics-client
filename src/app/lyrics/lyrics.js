// controller for <vl-lyrics> directive
angular.module('vl.lyrics')
    .controller('lyrics', lyrics);

// track attribute will bind to this controller
function lyrics(chartLyricsAPI) {
    var ctrl = this;


    ctrl.track.then(function(track){
    	ctrl.track_name = track.name;
    	ctrl.artist = track.artists[0].name;

    	chartLyricsAPI.searchLyricDirect(ctrl.artist, ctrl.track_name)
    		.then(function (response) {
        		ctrl.lyrics = response.data.lyrics_body;
    		});
    });
}