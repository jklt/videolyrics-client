angular.module('vl.video')
    .directive('vlVideo', vlVideo);

function vlVideo(youtubePlayer) {
    return {
        scope: {
            'track': '='
        },
        templateUrl: 'video/video.html',
        replace: true,
        controller: 'video',
        controllerAs: 'ctrl',
        bindToController: true,
        link: function (_, element, __, ctrl) {
            youtubePlayer.init(element[0], ctrl.playerReady, ctrl.stateChanged);
        }
    };
}