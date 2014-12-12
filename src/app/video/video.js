angular.module('vl.video')
    .controller('video', video);

function video(youtubeSearchApi, $scope, nowPlaying) {
    var ctrl = this;

    ctrl.playerReady = playerReady;
    ctrl.stateChanged = stateChanged;

    var videoId = undefined;
    var albumId = undefined;
    var trackId = undefined;

    var player = undefined;
    var state = undefined;


    $scope.$watch(function () {
        return nowPlaying.getTrack();
    }, function () {
        var track = nowPlaying.getTrack();
        if (track) {
            var artist = track.artists[0].name;
            var title = track.name;
            youtubeSearchApi.searchFirst(artist + ' ' + title)
                .then(function (id) {
                    videoId = id;
                    loadVideo();
                }, function () {
                });
        }
    });

    function playerReady(event) {
        player = event.target;
        loadVideo();
    }

    function stateChanged(event) {
        state = event.data;
        if (state === 0) {
            nowPlaying.next();
        }
        $scope.$apply(function () {
            if (state === 1) {
                nowPlaying.setPlaying(true);
            } else {
                nowPlaying.setPlaying(false);
            }
        });
    }

    function loadVideo() {
        if (player && videoId) {
            player.loadVideoById(videoId);
        }
    }

    var actionListener = {
        play: playVideo,
        pause: pauseVideo
    };
    nowPlaying.addActionListener(actionListener);

    $scope.$on('$destroy', function () {
        nowPlaying.removeActionListener(actionListener);
    });

    function playVideo() {
        player.playVideo();
    }

    function pauseVideo() {
        player.pauseVideo();
    }

}
