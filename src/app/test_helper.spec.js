beforeEach(function () {
    jasmine.addMatchers({
        toBeAPromise: function (util) {
            return {
                compare: function (actual) {
                    return {
                        pass: util.equals(typeof actual.then, 'function')
                        && util.equals(typeof actual.catch, 'function')
                        && util.equals(typeof actual.finally, 'function')
                    }
                }
            };
        }
    });
});