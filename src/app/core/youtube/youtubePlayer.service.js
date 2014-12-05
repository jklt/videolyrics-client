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
                    },
                    playerVars: {
                        controls: 0,
                        rel: 0,
                        modestbranding: 1,
                        iv_load_policy: 3,
                        showinfo: 0
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
