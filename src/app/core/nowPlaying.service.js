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
        getPosition: getPosition,
        getBuffered: getBuffered,
        addActionListener: addActionListener,
        removeActionListener: removeActionListener
    };

    var currentTrack, currentAlbum, currentTrackIsPlaying;
    var actionListeners = [];

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
        callAction('next');
    }

    function previous() {
        callAction('previous');
    }

    function play() {
        callAction('play');
    }

    function pause() {
        callAction('pause');
    }

    function isPlaying() {
        return currentTrackIsPlaying;
    }

    function setPlaying(playing) {
        currentTrackIsPlaying = playing;
    }

    function getPosition() {
        return 100000;
    }

    function getBuffered() {
        return 200000;
    }

    function addActionListener(listener) {
        actionListeners.push(listener);
    }

    function removeActionListener(listener) {
        actionListeners = actionListeners.filter(function (currentListener) {
            return currentListener !== listener
        });
    }

    function callAction(action) {
        angular.forEach(actionListeners, function (listener) {
            if (listener[action]) {
                listener[action]();
            }
        });
    }

}
