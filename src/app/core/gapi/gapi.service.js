angular.module('vl.core.gapi')
    .factory('gapi', function ($window) {
        if ( ! $window.gapi) {
            throw new Error('Google API Client not found');
        }
        return $window.gapi;
    });