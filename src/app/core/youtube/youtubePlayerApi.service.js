angular.module('youtube')
    .service('youtubePlayerApi', youtubePlayerApi);

function youtubePlayerApi($window) {
    try {
        return $window.YT;
    } catch (error) {
        throw new Error('YouTube Player API is not loaded');
    }
}
