// controller for <vl-search-box> directive
angular.module('vl.playBar')
    .controller('playBar', playBar);

function playBar($location, nowPlaying) {
    var ctrl = this;

    // public interface:
    ctrl.play = nowPlaying.play;
    ctrl.pause = nowPlaying.pause;
    ctrl.next = next;
    ctrl.previous = previous;

    ctrl.isPlaying = nowPlaying.isPlaying;

    ctrl.getTrack = getTrack;
    ctrl.getAlbum = getAlbum;
    ctrl.getPosition = getPosition;
    ctrl.getBuffered = getBuffered;

    function getAlbum() {
        var retval = nowPlaying.getAlbum();
        if (!retval){
            return undefined;
        }
        if (retval.images.length == 0){
            retval.images[0] = "http://asset-d.soup.io/asset/1377/8322_d804_48-square.png";
        }
        return retval;
    }

    function getTrack() {
        var retval = nowPlaying.getTrack();
        if (!retval){
            return undefined;
        }
        var secs = Math.floor(retval.duration_ms/1000);
        retval.duration_secs = secs;
        if (secs%60 < 10){
            retval.durationstr = Math.floor(secs/60) + ':0' + secs%60;
        }else{
            retval.durationstr = Math.floor(secs/60) + ':' + secs%60;
        }
        return retval;
    }

    function getPosition() {
        var retval = nowPlaying.getPosition();
        var secs = Math.floor(retval/1000);
        return secs;
    }

    function getBuffered() {
        var retval = nowPlaying.getBuffered();
        var secs = Math.floor(retval/1000);
        return secs;
    }

    function next() {
        nowPlaying.next();
        console.log("NEXT BUTTON PRESSED");
    }

    function previous() {
        nowPlaying.previous();
        console.log("PREVIOUS BUTTON PRESSED");
    }
}
