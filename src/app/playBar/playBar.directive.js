// define <vl-search-box></vl-search-box> directive
angular.module('vl.playBar')
    .directive('vlPlayBar', vlPlayBar);

function vlPlayBar() {
    return {
        scope: {},
        templateUrl: 'playBar/playBar.html',
        replace: true,
        controller: 'playBar',
        controllerAs: 'ctrl',
        bindToController: true
    };
}