// controller for the /search route
angular.module('vl.search')
    .controller('searchResults', searchResults);

function searchResults($location, musixMatchAPI) {
    var ctrl = this;
    ctrl.query = $location.search().q;
    console.log('henk');
    musixMatchAPI.search(ctrl.query).then(function(data){
        console.log('data');
        console.log(data);
        ctrl.tracks = data.data;

    });
}