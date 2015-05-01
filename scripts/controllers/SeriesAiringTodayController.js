
angular.module("movies").controller("SeriesAiringTodayController", function($scope, SeriesProvider, AiringTodaySeries) {
	
	$scope.model = {
		
		series: AiringTodaySeries.results
	};
	
	$scope.fn = {
		
		getFixedSerieVoteAverage: SeriesProvider.getFixedSerieVoteAverage,
		
		getSerieThumbImageUrl: SeriesProvider.getSerieThumbImageUrl,
		
		goToSerie: function(serie) {
			$scope.$emit("SerieSelected", serie);
		}
	};
	
});
