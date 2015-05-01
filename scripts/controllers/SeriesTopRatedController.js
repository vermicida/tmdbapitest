
angular.module("movies").controller("SeriesTopRatedController", function($scope, SeriesProvider, TopRatedSeries) {
	
	$scope.model = {
		
		series: TopRatedSeries.results
	};
	
	$scope.fn = {
		
		getFixedSerieVoteAverage: SeriesProvider.getFixedSerieVoteAverage,
		
		getSerieThumbImageUrl: SeriesProvider.getSerieThumbImageUrl,
		
		goToSerie: function(serie) {
			$scope.$emit("SerieSelected", serie);
		}
	};
	
});
