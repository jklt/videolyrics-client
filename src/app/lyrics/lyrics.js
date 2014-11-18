// controller for <vl-lyrics> directive
angular.module('vl.lyrics')
    .controller('lyrics', lyrics);

// track attribute will bind to this controller
function lyrics() {
    var ctrl = this;

    // log lyrics to console
    console.log('lyrics: ', ctrl.track.lyrics);
}