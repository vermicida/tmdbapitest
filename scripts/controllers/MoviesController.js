
angular.module("movies").controller("MoviesController", function($scope, $routeSegment, $location) {
	
	$scope.$on("MovieSelected", function(event, movie) {
		event.stopPropagation();
		$location.path("/movies/details").search({ id: movie.id });
	});
	
	$scope.fn = {
		
		routeIsUpcoming: function () {
			return $routeSegment.startsWith( "movies.upcoming" );
		},
		
		routeIsNowPlaying: function () {
			return $routeSegment.startsWith( "movies.now_playing" );
		},
		
		routeIsTopRated: function () {
			return $routeSegment.startsWith( "movies.top_rated" );
		},
		
		routeIsPopular: function () {
			return $routeSegment.startsWith( "movies.popular" );
		},
		
		doSearch: function() {
			$location.path("/movies/search").search({ key: $scope.model.search });
		}
	};
	
});
