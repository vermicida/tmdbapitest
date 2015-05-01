
angular.module("movies").service("MoviesProvider", function(TMDBProvider) {
	
	this.getUpcomingMovies = function() {
		return TMDBProvider.doRequest("movie/upcoming");
	};
	
	this.getNowPlayingMovies = function() {
		return TMDBProvider.doRequest("movie/now_playing");
	};
	
	this.getTopRatedMovies = function() {
		return TMDBProvider.doRequest("movie/top_rated");
	};
	
	this.getPopularMovies = function() {
		return TMDBProvider.doRequest("movie/popular");
	};
	
	this.searchMovies = function(name, page) {
		return TMDBProvider.doRequest("search/movie", { query: name, page: page || 1 });
	};
	
	this.getMovie = function(id) {
		return TMDBProvider.doRequest("movie/" + id);
	};
	
	this.getMovieDetails = function(id) {
		return TMDBProvider.doRequest("movie/" + id, { language: "en", append_to_response: "credits,videos,similar" });
	};
	
	this.getMovieThumbImageUrl = function(movie) {
		return TMDBProvider.getImageUrl(movie.poster_path, 45);
	};
	
	this.getMovieDetailsImageUrl = function(movie) {
		return TMDBProvider.getImageUrl(movie.poster_path, 185);
	};
	
	this.getFixedMovieVoteAverage = function(movie) {
		return movie.vote_average.toFixed(1);
	};
	
});
