// controller for <vl-lyrics> directive
angular.module('vl.lyrics')
    .controller('lyrics', lyrics);

// track attribute will bind to this controller
function lyrics() {
    var ctrl = this;


    ctrl.track.then(function(track){
    	ctrl.track_name = track.track_name;
    	ctrl.lyrics = track.lyrics_id;
	    console.log('lyrics: ', track.lyrics_id);
    });
}