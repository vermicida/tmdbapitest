/** 'TV Shows' component class */
function tvShowsComponent($state) {

    var self = this;

    self.routeIsAiringToday = function() {
        return $state.is("tvshows.airing-today");
    };

    self.routeIsOnTheAir = function() {
        return $state.is("tvshows.on-the-air");
    };

    self.routeIsTopRated = function() {
        return $state.is("tvshows.top-rated");
    };

    self.routeIsPopular = function() {
        return $state.is("tvshows.popular");
    };

    self.search = function(text) {
        $state.go("tvshows.search", {
            key: text,
            page: 1
        });
    };
}

/** 'TV Shows' component DI */
tvShowsComponent.$inject = ["$state"];

/** Adds the 'TV Shows' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("tvShows", {
        templateUrl: "views/tv-shows.html",
        controller: tvShowsComponent
    });
