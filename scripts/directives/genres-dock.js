/** 'Genres Dock' directive class */
function genresDockDirective() {

    return {
        restrict: "E",
        replate: true,
        scope: {
            genres: "<"
        },
        templateUrl: "views/genres-dock.html"
    };
}

/** Adds the 'Genres Dock' directive definition to the Application Injector */
angular
    .module("tmdbapitest")
    .directive("genresDock", genresDockDirective);