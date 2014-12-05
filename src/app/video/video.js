angular.module('vl.video')
    .controller('video', video);

function video(youtubeSearchApi, $scope, nowPlaying, $location) {
    var ctrl = this;

    ctrl.playerReady = playerReady;
    ctrl.stateChanged = stateChanged;

    ctrl.videoSrc = undefined;
    ctrl.videoError = false;

    var videoId = undefined;
    var albumId = undefined;
    var trackId = undefined;

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
                    ctrl.videoError = true;
                });
        }
    });

    var player = undefined;

    function playerReady(event) {
        player = event.target;
        loadVideo();
    }

    function stateChanged(event) {
        if (event.data == 0) {
            spotifyAPI.getAlbum(albumId)
                .then(function (album) {
                    var nextTrack = false;
                    angular.forEach(album.tracks.items, function (track) {
                        if (nextTrack) {
                            $location.path('albums/' + albumId + '/tracks/' + track.id);
                            nextTrack = false;
                        }
                        if (track.id == trackId) {
                            nextTrack = true;
                        }
                    })
                })
        }
    }

    function loadVideo() {
        if (player && videoId) {
            player.loadVideoById(videoId);
        }
    }

}
