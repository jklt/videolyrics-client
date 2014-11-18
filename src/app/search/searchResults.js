// controller for the /search route
angular.module('vl.search')
    .controller('searchResults', searchResults);

function searchResults($location) {
    var ctrl = this;
    ctrl.query = $location.search().q;

    // dummy data
    ctrl.tracks = [
        {
            title: 'Track 1',
            id: 1
        },
        {
            title: 'Track 2',
            id: 2
        },
        {
            title: 'Track 3',
            id: 3
        }
    ];
}