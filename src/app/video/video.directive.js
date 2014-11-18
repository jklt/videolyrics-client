angular.module('vl.video')
    .directive('vlVideo', vlVideo);

function vlVideo() {
    return {
        scope: {
            'track': '='
        },
        templateUrl: 'video/video.html',
        replace: true,
        controller: 'video',
        controllerAs: 'ctrl',
        bindToController: true
    };
}