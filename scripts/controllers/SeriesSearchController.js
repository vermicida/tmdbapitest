
angular.module("movies").controller("SeriesSearchController", function($scope, $routeParams, $location, SeriesProvider, SearchResult) {
	
	$scope.$watch(
		function() {
			return $scope.model.page;
		},
		function(toPage, currentPage) {
			if (toPage && toPage != currentPage) {
				$location.path("/series/search").search({ key: $routeParams.key, page: toPage });
			}
		}
	);
	
	$scope.model = {
		
		key: $routeParams.key,
		
		page: $routeParams.page,
		
		searchResult: SearchResult
	};
	
	$scope.fn = {
		
		getFixedSerieVoteAverage: SeriesProvider.getFixedSerieVoteAverage,
		
		getSerieThumbImageUrl: SeriesProvider.getSerieThumbImageUrl,
		
		shouldShowPaginator: function() {
			return $scope.model.searchResult.total_pages > 1;
		},
		
		goToSerie: function(serie) {
			$scope.$emit("SerieSelected", serie);
		}
	};
	
});
