angular.module('vl.video')
    .controller('video', video);

function video() {
    var ctrl = this;
    console.log('video: ', ctrl.track.id);
}
