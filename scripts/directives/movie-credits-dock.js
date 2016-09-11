/** 'Movie Credits Dock' directive class */
function movieCreditsDockDirective() {

    return {
        restrict: "E",
        replate: true,
        scope: {
            movies: "<"
        },
        templateUrl: "views/movie-credits-dock.html",
        link: function(scope) {
            scope.thereAreMovies = function() {
                return scope.movies.cast.length > 0;
            };
        }
    };
}

/** Adds the 'Movie Credits Dock' directive definition to the Application Injector */
angular
    .module("tmdbapitest")
    .directive("movieCreditsDock", movieCreditsDockDirective);
