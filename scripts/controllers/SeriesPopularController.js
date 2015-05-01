
angular.module("movies").controller("SeriesPopularController", function($scope, SeriesProvider, PopularSeries) {
	
	$scope.model = {
		
		series: PopularSeries.results
	};
	
	$scope.fn = {
		
		getFixedSerieVoteAverage: SeriesProvider.getFixedSerieVoteAverage,
		
		getSerieThumbImageUrl: SeriesProvider.getSerieThumbImageUrl,
		
		goToSerie: function(serie) {
			$scope.$emit("SerieSelected", serie);
		}
	};
	
});
