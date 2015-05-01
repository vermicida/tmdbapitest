
angular.module("movies").directive("votesDock", function($compile) {
	
	return {
		restrict: "EA",
		replate: true,
		scope: {
			voteAverage: "=",
			voteCount: "="
		},
		link: function(scope, element) {
			
			var template = "<div class=\"votes-dock\">"
			var rounded = Math.round(scope.voteAverage);
			
			for (var f = 0; f < rounded; f++ ) {
				template += "<span class=\"glyphicon glyphicon-star\"></span>";
			}
			
			for (var f = 0, F = 10 - rounded; f < F; f++ ) {
				template += "<span class=\"glyphicon glyphicon-star-empty\"></span>";
			}
			
			template += "<span class=\"badge\">{{ voteAverage }}</span>";
			template += "<small>basada en {{ voteCount }} votos</small>"
			template += "</div>";
			
			element.replaceWith($compile(angular.element(template))(scope));
		}
	};
});
