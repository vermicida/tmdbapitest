/** 'Credits Dock' directive class */
function creditsDockDirective($filter) {
    
    return {
        restrict: "E",
        replate: true,
        scope: {
            credits: "<"
        },
        templateUrl: "views/credits-dock.html",
        link: function(scope) {

            scope.directors = $filter("filter")(scope.credits.crew, { job: "Director" });

            scope.creditsHasCast = function() {
                return angular.isArray(scope.credits.cast) && scope.credits.cast.length > 0;
            };

            scope.creditsHasDirectors = function() {
                return scope.directors.length > 0;
            };
        }
    };
}

/** 'Credits Dock' directive DI */
creditsDockDirective.$inject = ["$filter"];

/** Adds the 'Credits Dock' directive definition to the Application Injector */
angular
    .module("tmdbapitest")
    .directive("creditsDock", creditsDockDirective);
