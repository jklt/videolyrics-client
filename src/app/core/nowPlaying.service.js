angular.module('vl.core')
    .factory('nowPlaying', nowPlaying);

function nowPlaying() {
    return {
        getTrack: getTrack,
        getAlbum: getAlbum,
        next: next,
        previous: previous,
        play: play,
        isPlaying: isPlaying,
        getPosition: getPosition,
        getBuffered: getBuffered
    };

    function getTrack() {
        // dummy
        return {
            "album": {
                "album_type": "single",
                "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY"],
                "external_urls": {"spotify": "https:\/\/open.spotify.com\/album\/4cCfFozyo6JC8acN8uIP7u"},
                "href": "https:\/\/api.spotify.com\/v1\/albums\/4cCfFozyo6JC8acN8uIP7u",
                "id": "4cCfFozyo6JC8acN8uIP7u",
                "images": [{
                    "height": 640,
                    "url": "https:\/\/i.scdn.co\/image\/95f5cbdb03db43c16046562c5f85cc2e3f77b596",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https:\/\/i.scdn.co\/image\/c950057b00130fb061e801b45aea6cc45dba1bc3",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https:\/\/i.scdn.co\/image\/53c5c7fbda7527abb8635e7af36af4e333f01e22",
                    "width": 64
                }],
                "name": "Magic",
                "type": "album",
                "uri": "spotify:album:4cCfFozyo6JC8acN8uIP7u"
            },
            "artists": [{
                "external_urls": {"spotify": "https:\/\/open.spotify.com\/artist\/4gzpq5DPGxSnKTe4SA8HAU"},
                "href": "https:\/\/api.spotify.com\/v1\/artists\/4gzpq5DPGxSnKTe4SA8HAU",
                "id": "4gzpq5DPGxSnKTe4SA8HAU",
                "name": "Coldplay",
                "type": "artist",
                "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
            }],
            "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY"],
            "disc_number": 1,
            "duration_ms": 285014,
            "explicit": false,
            "external_ids": {"isrc": "GBAYE1400206"},
            "external_urls": {"spotify": "https:\/\/open.spotify.com\/track\/27jdUE1EYDSXZqhjuNxLem"},
            "href": "https:\/\/api.spotify.com\/v1\/tracks\/27jdUE1EYDSXZqhjuNxLem",
            "id": "27jdUE1EYDSXZqhjuNxLem",
            "name": "Magic",
            "popularity": 86,
            "preview_url": "https:\/\/p.scdn.co\/mp3-preview\/da3d6f4b8f56a1509f394118a8e456e7e4556809",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:27jdUE1EYDSXZqhjuNxLem"
        };
    }

    function getAlbum() {
        // dummy
        return {
            "album_type": "single",
            "artists": [{
                "external_urls": {"spotify": "https:\/\/open.spotify.com\/artist\/4gzpq5DPGxSnKTe4SA8HAU"},
                "href": "https:\/\/api.spotify.com\/v1\/artists\/4gzpq5DPGxSnKTe4SA8HAU",
                "id": "4gzpq5DPGxSnKTe4SA8HAU",
                "name": "Coldplay",
                "type": "artist",
                "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
            }],
            "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY"],
            "copyrights": [{
                "text": "2014 Parlophone Records Limited, a Warner Music Group Company.",
                "type": "C"
            }, {"text": "2014 Parlophone Records Limited, a Warner Music Group Company.", "type": "P"}],
            "external_ids": {"upc": "825646306756"},
            "external_urls": {"spotify": "https:\/\/open.spotify.com\/album\/4cCfFozyo6JC8acN8uIP7u"},
            "genres": [],
            "href": "https:\/\/api.spotify.com\/v1\/albums\/4cCfFozyo6JC8acN8uIP7u",
            "id": "4cCfFozyo6JC8acN8uIP7u",
            "images": [{
                "height": 640,
                "url": "https:\/\/i.scdn.co\/image\/95f5cbdb03db43c16046562c5f85cc2e3f77b596",
                "width": 640
            }, {
                "height": 300,
                "url": "https:\/\/i.scdn.co\/image\/c950057b00130fb061e801b45aea6cc45dba1bc3",
                "width": 300
            }, {
                "height": 64,
                "url": "https:\/\/i.scdn.co\/image\/53c5c7fbda7527abb8635e7af36af4e333f01e22",
                "width": 64
            }],
            "name": "Magic",
            "popularity": 78,
            "release_date": "2014-03-03",
            "release_date_precision": "day",
            "tracks": {
                "href": "https:\/\/api.spotify.com\/v1\/albums\/4cCfFozyo6JC8acN8uIP7u\/tracks?offset=0&limit=50",
                "items": [{
                    "artists": [{
                        "external_urls": {"spotify": "https:\/\/open.spotify.com\/artist\/4gzpq5DPGxSnKTe4SA8HAU"},
                        "href": "https:\/\/api.spotify.com\/v1\/artists\/4gzpq5DPGxSnKTe4SA8HAU",
                        "id": "4gzpq5DPGxSnKTe4SA8HAU",
                        "name": "Coldplay",
                        "type": "artist",
                        "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
                    }],
                    "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY"],
                    "disc_number": 1,
                    "duration_ms": 285014,
                    "explicit": false,
                    "external_urls": {"spotify": "https:\/\/open.spotify.com\/track\/27jdUE1EYDSXZqhjuNxLem"},
                    "href": "https:\/\/api.spotify.com\/v1\/tracks\/27jdUE1EYDSXZqhjuNxLem",
                    "id": "27jdUE1EYDSXZqhjuNxLem",
                    "name": "Magic",
                    "preview_url": "https:\/\/p.scdn.co\/mp3-preview\/da3d6f4b8f56a1509f394118a8e456e7e4556809",
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:27jdUE1EYDSXZqhjuNxLem"
                }],
                "limit": 50,
                "next": null,
                "offset": 0,
                "previous": null,
                "total": 1
            },
            "type": "album",
            "uri": "spotify:album:4cCfFozyo6JC8acN8uIP7u"
        };
    }

    function next() {
        console.log('next');
    }

    function previous() {
        console.log('previous')
    }

    function play() {
        console.log('play');
    }

    function isPlaying() {
        return true;
    }

    function getPosition() {
        return 100000;
    }

    function getBuffered() {
        return 200000;
    }

}
