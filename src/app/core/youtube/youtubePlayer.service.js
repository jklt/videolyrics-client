angular.module('youtube')
    .service('youtubePlayer', youtubePlayer);

function youtubePlayer(youtubePlayerApi, $q, $rootScope) {
    return {
        'init': init
    };

    function init(element, onPlayerReady, onPlayerStateChange) {
        loadApi()
            .then(function () {
                return new youtubePlayerApi.Player(element, {
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            });
    }

    function loadApi() {
        var deferred = $q.defer();
        $rootScope.$watch(function () {
            return youtubePlayerApi.loaded;
        }, function () {
            if (youtubePlayerApi.loaded == 1) {
                deferred.resolve();
            }
        });
        return deferred.promise;
    }
}
