angular.module('vl.video')
    .controller('video', video);

function video($sce, youtubeSearchApi) {
    var ctrl = this;

    ctrl.videoSrc = undefined;
    ctrl.videoError = false;



    ctrl.track.then(function(track){
        var artist = track.artist_name;
        var title = track.track_name;

        youtubeSearchApi.searchFirst(artist + ' ' + title)
            .then(function (videoId) {
                ctrl.videoSrc = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + videoId);
            }, function () {
                ctrl.videoError = true;
            });
    });
    

}
