/** 'Similar Dock' directive class */
function similarDockDirective(
    $movies,
    $state,
    $tvShows
) {

    return {
        restrict: "E",
        replate: true,
        scope: {
            similar: "<",
            itemType: "@"
        },
        templateUrl: "views/similar-dock.html",
        link: function(scope, element) {

            scope.thereAreSimilarItems = function() {
                return scope.similar.results.length > 0;
            };

            scope.getItemType = function() {
                return scope.itemType == "movie" ? "Películas" : "Series";
            };

            scope.getItemTitle = function(item) {
                return scope.itemType == "movie"
                    ? item.title
                    : item.name;
            };

            scope.getItemThumbImageUrl = function(item) {
                return scope.itemType == "movie"
                    ? $movies.getMovieThumbImageUrl(item)
                    : $tvShows.getTVShowThumbImageUrl(item);
            };

            scope.goToItem = function(item) {
                if (scope.itemType == "movie") {
                    $state.go("movies.details", { movieId: item.id });
                }
                else {
                    $state.go("tvshows.details", { tvShowId: item.id });
                }
            };
        }
    };
}

/** 'Similar Dock' directive DI */
similarDockDirective.$inject = [
    "$movies",
    "$state",
    "$tvShows"
];

/** Adds the 'Similar Dock' directive definition to the Application Injector */
angular
    .module("tmdbapitest")
    .directive("similarDock", similarDockDirective);
