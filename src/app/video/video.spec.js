describe('video', function () {

    beforeEach(module('vl.video'));

    describe('video controller', function () {

        it('is defined', inject(function ($controller, $rootScope) {
            $controller('video', $rootScope.$new(), true);
        }));

    })
});