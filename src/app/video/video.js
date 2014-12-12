angular.module('vl.video')
    .controller('video', video);

function video(youtubeSearchApi, $scope, nowPlaying, $location) {
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

    $scope.$watch(function () {
        return nowPlaying.isPaused();
    }, function () {
        if (nowPlaying.isPaused()) {
            if (state === 1) {
                player.pauseVideo();
            }
        } else {
            if (state === 2) {
                player.playVideo();
            }
        }
    });

    function playerReady(event) {
        player = event.target;
        loadVideo();
    }

    function stateChanged(event) {
        state = event.data;
        if (state === 0) {
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
                });
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

}
