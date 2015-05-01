
angular.module("movies").controller("MoviesUpcomingController", function($scope, MoviesProvider, UpcomingMovies) {
	
	$scope.model = {
		
		movies: UpcomingMovies.results
	};
	
	$scope.fn = {
		
		getFixedMovieVoteAverage: MoviesProvider.getFixedMovieVoteAverage,
		
		getMovieThumbImageUrl: MoviesProvider.getMovieThumbImageUrl,
		
		goToMovie: function(movie) {
			$scope.$emit("MovieSelected", movie);
		}
	};
	
});
