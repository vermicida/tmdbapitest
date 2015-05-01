
angular.module("movies").controller("MainController", function($scope, $routeSegment) {
	
	$scope.fn = {
		
		routeIsMovies: function() {
			return $routeSegment.startsWith("movies");
		},
		
		routeIsPeople: function() {
			return $routeSegment.startsWith("people");
		},
		
		routeIsSeries: function() {
			return $routeSegment.startsWith("series");
		}
	};
	
});
