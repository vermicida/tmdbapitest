
angular.module("movies").controller("MoviesTopRatedController", function($scope, MoviesProvider, TopRatedMovies) {
	
	$scope.model = {
		
		movies: TopRatedMovies.results
	};
	
	$scope.fn = {
		
		getFixedMovieVoteAverage: MoviesProvider.getFixedMovieVoteAverage,
		
		getMovieThumbImageUrl: MoviesProvider.getMovieThumbImageUrl,
		
		goToMovie: function(movie) {
			$scope.$emit("MovieSelected", movie);
		}
	};
	
});
