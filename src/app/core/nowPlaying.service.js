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
        getPosition: getPosition,
        getBuffered: getBuffered
    };

    var currentTrack, currentAlbum;

    return service;

    function getTrack() {
        return currentTrack;
    }

    function setTrack(id) {
        spotifyAPI.getTrack(id)
            .then(function (track) {
                currentTrack = track;
                spotifyAPI.getAlbum()
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
        console.log('play');
    }

    function pause() {
        console.log('pause');
    }

    function isPlaying() {
        return true;
    }

    function getPosition() {
        return 100000;
    }

    function getBuffered() {
        return 200000;
    }

}
