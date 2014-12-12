// define <vl-lyrics track=".."></vl-lyrics> directive
angular.module('vl.albumCover')
    .directive('vlAlbumCover', vlAlbumCover);

function vlAlbumCover() {
    return {
        templateUrl: 'albumCover/albumCover.html',
        replace: true,
        controller: 'albumCover',
        controllerAs: 'ctrl',
        bindToController: true
    };
}