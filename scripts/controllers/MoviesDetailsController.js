
angular.module("movies").controller("MoviesDetailsController", function($scope, $window, $sce, MoviesProvider, Movie, MovieDetails) {
	
	$scope.model = {
		
		movie: Movie,
		
		details: MovieDetails
	};
	
	$scope.fn = {
		
		goBack: function() {
			$window.history.back();
		},
		
		getMovieDetailsImageUrl: function() {
			return MoviesProvider.getMovieDetailsImageUrl($scope.model.movie);
		},
		
		movieHasOriginalName: function() {
			return $scope.model.movie.title != $scope.model.movie.original_title;
		},
		
		movieHasOverview: function() {
			return $scope.model.movie.overview && $scope.model.movie.overview.length > 0;
		},
		
		getMovieOverview: function() {
			return $sce.trustAsHtml($scope.model.movie.overview);
		}
	};
	
});
