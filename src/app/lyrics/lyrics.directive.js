// define <vl-lyrics track=".."></vl-lyrics> directive
angular.module('vl.lyrics')
    .directive('vlLyrics', vlLyrics);

function vlLyrics() {
    return {
        scope: {
            'track': '='
        },
        templateUrl: 'lyrics/lyrics.html',
        replace: true,
        controller: 'lyrics',
        controllerAs: 'ctrl',
        bindToController: true
    };
}