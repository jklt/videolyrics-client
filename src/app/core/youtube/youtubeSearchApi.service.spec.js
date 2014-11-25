describe('youtubeSearchApi', function () {

    var youtubeSearchApi, youtubeSearchUri, $httpBackend;
    beforeEach(function () {
        // load module
        module('youtube');

        // inject dependencies
        inject(function (_youtubeSearchApi_, _youtubeSearchUri_, _$httpBackend_) {
            youtubeSearchApi = _youtubeSearchApi_;
            youtubeSearchUri = _youtubeSearchUri_;
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
            $httpBackend.expectGET(youtubeSearchUri + '?maxResults=1&part=id&q=dummy+query&type=video&videoEmbeddable=true')
                .respond(200, {
                    items: [{
                        id: {
                            videoId: expectedVideoId
                        }
                    }]
                });

            var actualVideoId;
            youtubeSearchApi.searchFirst('dummy query').then(function (videoId) {
                actualVideoId = videoId;
            });

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();

            expect(actualVideoId).toEqual(expectedVideoId);
        });

        it('returns an error via the promise when no video is found', function () {
            $httpBackend.expectGET(youtubeSearchUri + '?maxResults=1&part=id&q=dummy+query&type=video&videoEmbeddable=true')
                .respond(200, {
                    items: []
                });

            var actualError;
            youtubeSearchApi.searchFirst('dummy query').catch(function (error) {
                actualError = error;
            });

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();

            expect(actualError).toEqual(jasmine.any(Error));
        })

    });

});