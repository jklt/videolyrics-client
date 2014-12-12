// define <vl-lyrics track=".."></vl-lyrics> directive
angular.module('vl.videoLyrics')
    .directive('vlTrackList', trackList);

function trackList() {
    return {
        templateUrl: 'videoLyrics/trackList.html',
        replace: true,
        controller: 'trackList',
        controllerAs: 'ctrl',
        bindToController: true
    };
}