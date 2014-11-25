describe('youtubeSearchApi', function () {

    var youtubeSearchApi, youtubeSearchUri, $httpBackend;
    beforeEach(function () {
        // load module
        module('youtube');

        // inject dependencies
        inject(function (_youtubeSearchApi_, _youtubeSearchUri_, _$httpBackend_) {
            // under test
            youtubeSearchApi = _youtubeSearchApi_;
            youtubeSearchUri = _youtubeSearchUri_;
            // $httpBackend to mock the backend requests
            $httpBackend = _$httpBackend_;
        })
    });

    describe('searchFirst', function () {

        it('exists as a method', function () {
            expect(youtubeSearchApi.searchFirst).toEqual(jasmine.any(Function));
        });

        it('returns a promise', function () {
            expect(youtubeSearchApi.searchFirst('dummy query')).toBeAPromise();
        });

        it('returns the video ID via the promise', function () {
            var expectedVideoId = 12345;
            // we except a GET request
            $httpBackend.expectGET(youtubeSearchUri + '?maxResults=1&part=id&q=dummy+query&type=video&videoEmbeddable=true')
                // with status code 200 and JSON data
                .respond(200, {
                    items: [{
                        id: {
                            videoId: expectedVideoId
                        }
                    }]
                });

            // declare variable in this scope so that in can be used
            var actualVideoId;
            // execute api request
            youtubeSearchApi.searchFirst('dummy query').then(function (videoId) {
                // store the videoId
                actualVideoId = videoId;
            });

            // execute the outstanding requests
            $httpBackend.flush();

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();

            expect(actualVideoId).toEqual(expectedVideoId);
        });

        it('returns an error via the promise when no video is found', function () {
            // expect a GET request that returns no data
            $httpBackend.expectGET(youtubeSearchUri + '?maxResults=1&part=id&q=dummy+query&type=video&videoEmbeddable=true')
                .respond(200, {
                    items: []
                });

            // store the returned error
            var actualError;
            youtubeSearchApi.searchFirst('dummy query').catch(function (error) {
                actualError = error;
            });

            // execute the outstanding requests
            $httpBackend.flush();

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();

            // actualError must be any instance of Error
            expect(actualError).toEqual(jasmine.any(Error));
        })

    });

});