angular.module('vl.core')
    .factory('nowPlaying', nowPlaying);

function nowPlaying(spotifyAPI, navigator, $timeout) {
    var service = {
        getTrack: getTrack,
        setTrack: setTrack,
        getAlbum: getAlbum,
        next: next,
        previous: previous,
        play: play,
        pause: pause,
        seek: seek,
        isPlaying: isPlaying,
        setPlaying: setPlaying,
        getPosition: getPosition,
        setPosition: setPosition,
        getBuffered: getBuffered,
        setBuffered: setBuffered,
        setBufferedFraction: setBufferedFraction,
        addActionListener: addActionListener,
        removeActionListener: removeActionListener
    };

    var currentTrack, currentAlbum, currentTrackIsPlaying, currentPosition, bufferedAmount;
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
        if (getAlbum()) {
            var playNextTrack = false;
            angular.forEach(getAlbum().tracks.items, function (track) {
                if (playNextTrack) {
                    navigator.track(getAlbum().id, track.id);
                }
                playNextTrack = track.id === getTrack().id;
            });
        }
    }

    function previous() {
        callAction('previous');
        if (getAlbum()) {
            var lastTrackId = null;
            angular.forEach(getAlbum().tracks.items, function (track) {
                if (track.id === getTrack().id && lastTrackId) {
                    navigator.track(getAlbum().id, lastTrackId);
                }
                lastTrackId = track.id;
            });
        }
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
        return currentPosition;
    }

    function setPosition(position) {
        currentPosition = position;
    }

    function getBuffered() {
        return bufferedAmount;
    }

    function setBuffered(buffered) {
        bufferedAmount = buffered;
    }

    function setBufferedFraction(fraction) {
        bufferedAmount = fraction * getTrack().duration_ms;
    }

    function addActionListener(listener) {
        actionListeners.push(listener);
    }

    function removeActionListener(listener) {
        actionListeners = actionListeners.filter(function (currentListener) {
            return currentListener !== listener
        });
    }

    function seek(fraction) {
        callAction('seek', [fraction]);
    }

    function callAction(action, parameters) {
        angular.forEach(actionListeners, function (listener) {
            if (listener[action]) {
                listener[action].apply(null, parameters);
            }
        });
    }

}
