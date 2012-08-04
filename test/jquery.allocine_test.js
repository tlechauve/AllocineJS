/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {
    module('jQuery#allocine', function () {
        $.ajaxSetup({ timeout: 4000 });
    });

    test('searchMovie', 3, function() {
        var movie = 'Batman',
            response;
        stop();
        $(document).allocine('searchMovie', movie, {
            complete: function (jqxhr) {
                start();
                equal(jqxhr.status, 200, "should receive a 200 response");
                response = JSON.parse(jqxhr.responseText);
                equal(response.feed.count, 5, "should receive 5 movies");
                ok(response.feed.totalResults >= 28, "currently there is 28 movies for Batman request");
            }
        });
    });

    test('getMovie', 2, function () {
        var idmovie = '132874', // Batman Dark knight rises
            response;
        stop();
        $(document).allocine('getMovie', idmovie, {
            complete: function (jqxhr) {
                start();
                equal(jqxhr.status, 200, "should receive a 200 response");
                response = JSON.parse(jqxhr.responseText);
                equal(response.movie.originalTitle, 'The Dark Knight Rises', "should fetch The dark knight rises");
            }
        });
    });
}(jQuery));
