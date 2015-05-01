
angular.module("movies").service("SeriesProvider", function($q, TMDBProvider) {
	
	this.getAiringTodaySeries = function() {
		return TMDBProvider.doRequest("tv/airing_today");
	};
	
	this.getOnTheAirSeries = function() {
		return TMDBProvider.doRequest("tv/on_the_air");
	};
	
	this.getTopRatedSeries = function() {
		return TMDBProvider.doRequest("tv/top_rated");
	};
	
	this.getPopularSeries = function() {
		return TMDBProvider.doRequest("tv/popular");
	};
	
	this.searchSeries = function(name, page) {
		return TMDBProvider.doRequest("search/tv", { query: name, page: page || 1 });
	};
	
	this.getSerie = function(id) {
		return TMDBProvider.doRequest("tv/" + id);
	};
	
	this.getSerieDetails = function(id) {
		return TMDBProvider.doRequest("tv/" + id, { language: "en", append_to_response: "credits,videos,similar" });
	};
	
	this.getSerieThumbImageUrl = function(serie) {
		return TMDBProvider.getImageUrl(serie.poster_path, 45);
	};
	
	this.getSerieDetailsImageUrl = function(serie) {
		return TMDBProvider.getImageUrl(serie.poster_path, 185);
	};
	
	this.getFixedSerieVoteAverage = function(serie) {
		return serie.vote_average.toFixed(1);
	};
	
});
