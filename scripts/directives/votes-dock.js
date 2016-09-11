/** 'Votes Dock' directive class */
function votesDockDirective($compile) {

    return {
        restrict: "E",
        replate: true,
        scope: {
            voteAverage: "<",
            voteCount: "<"
        },
        link: function(scope, element) {

            var rounded = Math.round(scope.voteAverage);
            var template = ["<div class='votes-dock'>"];

            for (var f = 0; f < rounded; f++ ) {
                template.push("<span class='glyphicon glyphicon-star'></span>");
            }
            for (var f = 0, F = 10 - rounded; f < F; f++ ) {
                template.push("<span class='glyphicon glyphicon-star-empty'></span>");
            }

            template.push("<span class='badge'>{{ voteAverage }}</span>");
            template.push("<small>basada en {{ voteCount }} votos</small>");
            template.push("</div>");

            element.replaceWith($compile(angular.element(template.join("")))(scope));
        }
    };
}

/** 'Votes Dock' directive DI */
votesDockDirective.$inject = ["$compile"];

/** Adds the 'Votes Dock' directive definition to the Application Injector */
angular
    .module("tmdbapitest")
    .directive("votesDock", votesDockDirective);
