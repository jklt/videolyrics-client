// all application specific modules depend on this module
// this core module defines the shared services and 3th party dependencies
angular.module('vl.core', [
    // application core modules
    'youtube',
    'azLyrics',

    // 3th party dependencies
    'ngRoute',          // Angular Router
    'mm.foundation'    // Angular version of Foundation components
]);