/** 'Search Box' directive class */
function searchBoxDirective() {

    return {
        restrict: "E",
        replate: true,
        scope: {
            cssClass: "@",
            onSearch: "&"
        },
        templateUrl: "views/search-box.html",
        link: function(scope, element) {
            scope.notify = function() {
                scope.onSearch({ text: scope.text });
            };
        }
    };
}

/** Adds the 'Search Box' directive definition to the Application Injector */
angular
    .module("tmdbapitest")
    .directive("searchBox", searchBoxDirective);
