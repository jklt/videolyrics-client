angular.module('vl.video')
    .controller('video', video);

function video($scope, $sce, youtubeSearchApi, spotifyAPI) {
    var ctrl = this;

    ctrl.playerReady = playerReady;
    ctrl.stateChanged = stateChanged;

    ctrl.videoSrc = undefined;
    ctrl.videoError = false;

    var videoId = undefined;

    ctrl.track.then(function (track) {
        console.log(track.album);
        var artist = track.artists[0].name;
        var title = track.name;

        youtubeSearchApi.searchFirst(artist + ' ' + title)
            .then(function (id) {
                videoId = id;
                ctrl.videoSrc = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + id);
                loadVideo();
            }, function () {
                ctrl.videoError = true;
            });
    });

    var player = undefined;

    function playerReady(event) {
        player = event.target;
        loadVideo();
    }

    function stateChanged(event) {
        if (event.data == 0) {

        }
    }

    function loadVideo() {
        if (player && videoId) {
            player.loadVideoById(videoId);
        }
    }

}
