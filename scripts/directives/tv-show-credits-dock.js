/** 'TV Show Credits Dock' directive class */
function tvShowCreditsDockDirective() {

    return {
        restrict: "E",
        replate: true,
        scope: {
            tvShows: "<"
        },
        templateUrl: "views/tv-show-credits-dock.html",
        link: function(scope) {
            scope.thereAreTVShows = function() {
                return scope.tvShows.cast.length > 0;
            };
        }
    };
}

/** Adds the 'TV Show Credits Dock' directive definition to the Application Injector */
angular
    .module("tmdbapitest")
    .directive("tvShowCreditsDock", tvShowCreditsDockDirective);
