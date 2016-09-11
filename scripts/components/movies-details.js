/** 'Movies Details' component class */
function movieDetailsComponent(
    $movies,
    $sce,
    $window
) {
    var self = this;

    self.goBack = function() {
        $window.history.back();
    };

    self.getMovieDetailsImageUrl = $movies.getMovieDetailsImageUrl;

    self.movieHasOriginalName = function() {
        return self.movie.title != self.movie.original_title;
    };

    self.movieHasOverview = function() {
        return self.movie.overview && self.movie.overview.length > 0;
    };

    self.getMovieOverview = function() {
        return $sce.trustAsHtml(self.movie.overview);
    };
}

/** 'Movies Details' component DI */
movieDetailsComponent.$inject = [
    "$movies",
    "$sce",
    "$window"
];

/** Adds the 'Movies Details' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("movieDetails", {
        bindings: {
            movie: "<",
            details: "<"
        },
        templateUrl: "views/movies-details.html",
        controller: movieDetailsComponent
    });
