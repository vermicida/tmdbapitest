
angular.module("movies").controller("SeriesController", function($scope, $routeSegment, $location) {
	
	$scope.$on("SerieSelected", function(event, serie) {
		event.stopPropagation();
		$location.path("/series/details").search({ id: serie.id });
	});
	
	$scope.fn = {
		
		routeIsAiringToday: function () {
			return $routeSegment.startsWith( "series.airing_today" );
		},
		
		routeIsOnTheAir: function () {
			return $routeSegment.startsWith( "series.on_the_air" );
		},
		
		routeIsTopRated: function () {
			return $routeSegment.startsWith( "series.top_rated" );
		},
		
		routeIsPopular: function () {
			return $routeSegment.startsWith( "series.popular" );
		},
		
		doSearch: function() {
			$location.path("/series/search").search({ key: $scope.model.search });
		}
	};
	
});
