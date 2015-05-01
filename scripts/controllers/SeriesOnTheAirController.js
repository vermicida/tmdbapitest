
angular.module("movies").controller("SeriesOnTheAirController", function($scope, SeriesProvider, OnTheAirSeries) {
	
	$scope.model = {
		
		series: OnTheAirSeries.results
	};
	
	$scope.fn = {
		
		getFixedSerieVoteAverage: SeriesProvider.getFixedSerieVoteAverage,
		
		getSerieThumbImageUrl: SeriesProvider.getSerieThumbImageUrl,
		
		goToSerie: function(serie) {
			$scope.$emit("SerieSelected", serie);
		}
	};
	
});
