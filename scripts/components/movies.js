/** 'Movies' component class */
function moviesComponent($state) {

    var self = this;

    self.routeIsUpcoming = function() {
        return $state.is("movies.upcoming");
    };

    self.routeIsNowPlaying = function() {
        return $state.is("movies.now-playing");
    };

    self.routeIsTopRated = function() {
        return $state.is("movies.top-rated");
    };

    self.routeIsPopular = function() {
        return $state.is("movies.popular");
    };

    self.search = function(text) {
        $state.go("movies.search", {
            key: text,
            page: 1
        });
    };
}

/** 'Movies' component DI */
moviesComponent.$inject = ["$state"];

/** Adds the 'Movies' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("movies", {
        templateUrl: "views/movies.html",
        controller: moviesComponent
    });
