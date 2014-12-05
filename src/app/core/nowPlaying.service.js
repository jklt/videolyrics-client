angular.module('vl.core')
    .factory('nowPlaying', nowPlaying);

function nowPlaying(spotifyAPI) {
    var service = {
        getTrack: getTrack,
        setTrack: setTrack,
        getAlbum: getAlbum,
        next: next,
        previous: previous,
        play: play,
        pause: pause,
        isPlaying: isPlaying,
        setPlaying: setPlaying,
        isPaused: isPaused,
        getPosition: getPosition,
        getBuffered: getBuffered
    };

    var currentTrack, currentAlbum, currentTrackIsPlaying;
    var paused = false;

    return service;

    function getTrack() {
        return currentTrack;
    }

    function setTrack(id) {
        spotifyAPI.getTrack(id)
            .then(function (track) {
                currentTrack = track;
                spotifyAPI.getAlbum(track.album.id)
                    .then(function (album) {
                        currentAlbum = album;
                    })
            });
    }

    function getAlbum() {
        return currentAlbum;
    }

    function next() {
        console.log('next');
    }

    function previous() {
        console.log('previous')
    }

    function play() {
        paused = false;
    }

    function pause() {
        paused = true;
    }

    function isPlaying() {
        return currentTrackIsPlaying;
    }

    function setPlaying(playing) {
        currentTrackIsPlaying = playing;
    }

    function isPaused() {
        return paused;
    }

    function getPosition() {
        return 100000;
    }

    function getBuffered() {
        return 200000;
    }

}
