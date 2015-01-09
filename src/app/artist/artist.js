// controller for the /track/:trackId route
angular.module('vl.artist')
    .controller('artist', artist);

function artist(spotifyAPI, $stateParams) {
    var ctrl = this;
    var artistId = $stateParams.artistId;
    ctrl.artist = spotifyAPI.getArtist(artistId)
        .then(function (response) {
            ctrl.artist =  response.data;
            ctrl.artist.thumbnail = findThumbnail(ctrl.artist.images);
        });
    ctrl.albums = spotifyAPI.getArtistAlbums(artistId)
        .then(function (response) {
            ctrl.albums =  response.data.items;
            findThumbnails(ctrl.albums);
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
