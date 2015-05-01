
angular.module("movies").controller("MoviesNowPlayingController", function($scope, MoviesProvider, NowPlayingMovies) {
	
	$scope.model = {
		
		movies: NowPlayingMovies.results
	};
	
	$scope.fn = {
		
		getFixedMovieVoteAverage: MoviesProvider.getFixedMovieVoteAverage,
		
		getMovieThumbImageUrl: MoviesProvider.getMovieThumbImageUrl,
		
		goToMovie: function(movie) {
			$scope.$emit("MovieSelected", movie);
		}
	};
	
});
