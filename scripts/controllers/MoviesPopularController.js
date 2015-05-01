
angular.module("movies").controller("MoviesPopularController", function($scope, MoviesProvider, PopularMovies) {
	
	$scope.model = {
		
		movies: PopularMovies.results
	};
	
	$scope.fn = {
		
		getFixedMovieVoteAverage: MoviesProvider.getFixedMovieVoteAverage,
		
		getMovieThumbImageUrl: MoviesProvider.getMovieThumbImageUrl,
		
		goToMovie: function(movie) {
			$scope.$emit("MovieSelected", movie);
		}
	};
	
});


