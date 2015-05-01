
angular.module("movies").directive("genresDock", function($compile) {
	
	return {
		restrict: "EA",
		replate: true,
		scope: {
			genres: "="
		},
		link: function(scope, element) {
			
			var template = "<div class=\"genres-dock\">"
			
			if (scope.genres && scope.genres.length > 0) {
				for (var f = 0, F = scope.genres.length; f < F; f++ ) {
					template += "<span class=\"label label-primary\">" + scope.genres[f].name + "</span>";
				}
			}
			else {
				template += "<!--No hay géneros que mostrar-->";
			}
			
			template += "</div>";
			
			element.replaceWith($compile(angular.element(template))(scope));
		}
	};
});
