
angular.module("movies").controller("SeriesDetailsController", function($scope, $window, $sce, SeriesProvider, Serie, SerieDetails) {
	
	$scope.model = {
		
		serie: Serie,
		
		details: SerieDetails
	};
	
	$scope.fn = {
		
		goBack: function() {
			$window.history.back();
		},
		
		getSerieDetailsImageUrl: function() {
			return SeriesProvider.getSerieDetailsImageUrl($scope.model.serie);
		},
		
		serieHasOriginalName: function() {
			return $scope.model.serie.name != $scope.model.serie.original_name;
		},
		
		serieHasOverview: function() {
			return $scope.model.serie.overview && $scope.model.serie.overview.length > 0;
		},
		
		getSerieOverview: function() {
			return $sce.trustAsHtml($scope.model.serie.overview);
		}
	};
	
});
