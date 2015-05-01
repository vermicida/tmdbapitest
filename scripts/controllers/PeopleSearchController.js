
angular.module("movies").controller("PeopleSearchController", function($scope, $routeParams, $location, PeopleProvider, MoviesProvider, SeriesProvider, SearchResult) {
	
	$scope.$watch(
		function() {
			return $scope.model.page;
		},
		function(toPage, currentPage) {
			if (toPage && toPage != currentPage) {
				$location.path("/people/search").search({ key: $routeParams.key, page: toPage });
			}
		}
	);
	
	$scope.model = {
		
		key: $routeParams.key,
		
		page: $routeParams.page,
		
		searchResult: SearchResult
	};
	
	$scope.fn = {
		
		getPersonThumbImageUrl: PeopleProvider.getPersonThumbImageUrl,
		
		getFixedPopularity: PeopleProvider.getFixedPopularity,
		
		goToPerson: function(person) {
			$scope.$emit("PersonSelected", person);
		},
		
		getItemTitle: function(item) {
			return item.media_type == "movie" ? item.title : item.name;
		},
		
		getItemThumbImageUrl: function(item) {
			return item.media_type == "movie" ? MoviesProvider.getMovieThumbImageUrl(item) : SeriesProvider.getSerieThumbImageUrl(item);
		},
		
		goToItem: function(item) {
			$scope.$emit(item.media_type == "movie" ? "MovieSelected" : "SerieSelected", item);
		},
		
		shouldShowPaginator: function() {
			return $scope.model.searchResult.total_pages > 1;
		}
	};
	
});
