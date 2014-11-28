angular.module('vl.video')
    .controller('video', video);

function video($sce, youtubeSearchApi) {
    var ctrl = this;

    ctrl.videoSrc = undefined;
    ctrl.videoError = false;



    ctrl.track.then(function(track){
        var artist = track.artists[0].name;
        var title = track.name;

        youtubeSearchApi.searchFirst(artist + ' ' + title)
            .then(function (videoId) {
                ctrl.videoSrc = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + videoId);
            }, function () {
                ctrl.videoError = true;
            });
    });
    

}
