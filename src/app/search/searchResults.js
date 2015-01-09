// controller for the /search route
angular.module('vl.search')
    .controller('searchResults', searchResults);

function searchResults($location, spotifyAPI) {
    var ctrl = this;
    ctrl.query = $location.search().q;
    spotifyAPI.search(ctrl.query).then(function(data){
        ctrl.artists = data.artists.items;
        findThumbnails(ctrl.artists);
        ctrl.albums = data.albums.items;
        findThumbnails(ctrl.albums);
    });
    spotifyAPI.searchTracks(ctrl.query).then(function(data){
        ctrl.tracks = data.tracks.items;
    });
}

function findThumbnails(objects){
    for (var index = 0; index < objects.length; index++){
    	var obj = objects[index];
    	obj.thumbnail = findThumbnail(obj.images);
    }
}

function findThumbnail(images){
	var smallest = images[images.length-1];
	if (images.length == 0){
		return "http://asset-d.soup.io/asset/1377/8322_d804_48-square.png";
	}
	return smallest.url;
}