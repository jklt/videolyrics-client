angular.module('vl.videoLyrics')
    .controller('trackList', trackList);

function trackList() {
    var ctrl = this;

    ctrl.tracks = [{
        name: 'Track 1'
    }, {
        name: 'Track 2'
    }, {
        name: 'Track 3'
    }];

}