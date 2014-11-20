describe('gapi', function () {

    // stub for the $window object
    var windowStub;
    // make $injector available in all test cases
    var $injector;
    beforeEach(function () {
        // load a inline module that provides a stub for the $window object
        module(function ($provide) {
            $provide.value('$window', windowStub);
        });
        windowStub = {};

        // load the module that contains the service under test
        module('vl.core.gapi');

        // load the $injector via DI
        inject(function (_$injector_) {
            $injector = _$injector_;
        })
    });

    it('returns the window.gapi object', function () {
        var gapiStub = {}; // gapi stub object
        windowStub.gapi = gapiStub; // attach a gapi stub on the window

        var gapi = $injector.get('gapi'); // resolve gapi from the injector via DI

        expect(gapi).toBe(gapiStub); // resolved gapi object must equal the stubbed one
    });

    it('throws an error when the gapi is not loaded', function () {
        expect(function () {
            $injector.get('gapi');
        }).toThrow();
    });

});