// controller for <vl-search-box> directive
angular.module('vl.playBar')
    .controller('playBar', playBar);

function playBar($location) {
    var ctrl = this;

    // public interface:
    ctrl.play = play;
    ctrl.next = next;
    ctrl.previous = previous;
    ctrl.query = '';

    function play() {
        // go to route /search?q=Search+query
        console.log("PLAY BUTTON PRESSED");
    }

    function next() {
        // go to route /search?q=Search+query
        console.log("NEXT BUTTON PRESSED");
    }

    function previous() {
        // go to route /search?q=Search+query
        console.log("PREVIOUS BUTTON PRESSED");
    }
}
