angular.module('vl.video')
    .controller('video', video);

function video($sce, youtubeSearchApi) {
    var ctrl = this;

    ctrl.videoSrc = undefined;
    ctrl.videoError = false;

    var artist = ctrl.track.artist;
    var title = ctrl.track.title;

    youtubeSearchApi.searchFirst(artist + ' ' + title)
        .then(function (videoId) {
            ctrl.videoSrc = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + videoId);
        }, function () {
            ctrl.videoError = true;
        });

}
