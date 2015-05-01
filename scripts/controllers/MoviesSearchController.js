
angular.module("movies").controller("MoviesSearchController", function($scope, $routeParams, $location, MoviesProvider, SearchResult) {
	
	$scope.$watch(
		function() {
			return $scope.model.page;
		},
		function(toPage, currentPage) {
			if (toPage && toPage != currentPage) {
				$location.path("/movies/search").search({ key: $routeParams.key, page: toPage });
			}
		}
	);
	
	$scope.model = {
		
		key: $routeParams.key,
		
		page: $routeParams.page,
		
		searchResult: SearchResult
	};
	
	$scope.fn = {
		
		getFixedMovieVoteAverage: MoviesProvider.getFixedMovieVoteAverage,
		
		getMovieThumbImageUrl: MoviesProvider.getMovieThumbImageUrl,
		
		shouldShowPaginator: function() {
			return $scope.model.searchResult.total_pages > 1;
		},
		
		goToMovie: function(movie) {
			$scope.$emit("MovieSelected", movie);
		}
	};
	
});
