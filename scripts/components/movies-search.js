/** 'Movie Search' component class */
function movieSearchComponent(
    $movies,
    $state
) {
    var self = this;

    self.pageChanged = function(changes) {
        $state.go("movies.search", {
            key: self.key,
            page: self.page
        });
    };

    self.getFixedMovieVoteAverage = $movies.getFixedMovieVoteAverage;
    
    self.getMovieThumbImageUrl = $movies.getMovieThumbImageUrl;
    
    self.shouldShowPaginator = function() {
        return self.movies.total_pages > 1;
    };
}

/** 'Movie Search' component DI */
movieSearchComponent.$inject = [
    "$movies",
    "$state"
];

/** Adds the 'Movie Search' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("movieSearch", {
        bindings: {
            movies: "<",
            key: "<",
            page: "<"
        },
        templateUrl: "views/movies-search.html",
        controller: movieSearchComponent
    });
