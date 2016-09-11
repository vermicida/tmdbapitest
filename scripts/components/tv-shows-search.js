/** 'TV Shows Search' component class */
function tvShowSearchComponent(
    $tvShows,
    $state
) {
    var self = this;

    self.pageChanged = function(changes) {
        $state.go("tvshows.search", {
            key: self.key,
            page: self.page
        });
    };

    self.getFixedTVShowVoteAverage = $tvShows.getFixedTVShowVoteAverage;
    
    self.getTVShowThumbImageUrl = $tvShows.getTVShowThumbImageUrl;
    
    self.shouldShowPaginator = function() {
        return self.tvShows.total_pages > 1;
    };
}

/** 'TV Shows Search' component DI */
tvShowSearchComponent.$inject = [
    "$tvShows",
    "$state"
];

/** Adds the 'TV Shows Search' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("tvShowSearch", {
        bindings: {
            tvShows: "<",
            key: "<",
            page: "<"
        },
        templateUrl: "views/tv-shows-search.html",
        controller: tvShowSearchComponent
    });
