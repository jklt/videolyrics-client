angular.module('vl.video')
    .controller('video', video);

function video($http, $sce) {
    var ctrl = this;

    var artist = ctrl.track.artist;
    var title = ctrl.track.title;

    $http.get('https://content.googleapis.com/youtube/v3/search', {
        params: {
            part: 'id',
            type: 'video',
            q: artist + ' ' + title,
            videoEmbeddable: true,
            key: 'AIzaSyAnAt5FyQ5UEv4nvLq83hD0UNCH0Ln-Sto',
            maxResults: 1
        }
    })
        .then(function (response) {
            if (response.data.items.length > 0) {
                ctrl.videoSrc = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + response.data.items[0].id.videoId);
            }
        })
}
