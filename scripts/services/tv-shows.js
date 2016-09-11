/** 'TV Shows' service */
function tvShowsService($theMovieDatabase) {
    
    this.getAiringTodayTVShows = function() {
        return $theMovieDatabase.doRequest("tv/airing_today");
    };

    this.getOnTheAirTVShows = function() {
        return $theMovieDatabase.doRequest("tv/on_the_air");
    };

    this.getTopRatedTVShows = function() {
        return $theMovieDatabase.doRequest("tv/top_rated");
    };

    this.getPopularTVShows = function() {
        return $theMovieDatabase.doRequest("tv/popular");
    };

    this.searchTVShows = function(name, page) {
        return $theMovieDatabase.doRequest("search/tv", {
            query: name,
            page: page || 1
        });
    };

    this.getTVShow = function(id) {
        return $theMovieDatabase.doRequest("tv/" + id);
    };

    this.getTVShowDetails = function(id) {
        return $theMovieDatabase.doRequest("tv/" + id, {
            language: "en",
            append_to_response: "credits,videos,similar"
        });
    };

    this.getTVShowThumbImageUrl = function(tvShow) {
        return $theMovieDatabase.getImageUrl(tvShow.poster_path, 45);
    };

    this.getTVShowDetailsImageUrl = function(tvShow) {
        return $theMovieDatabase.getImageUrl(tvShow.poster_path, 185);
    };

    this.getFixedTVShowVoteAverage = function(tvShow) {
        return tvShow.vote_average.toFixed(1);
    };
}

/** 'TV Shows' service DI */
tvShowsService.$inject = ["$theMovieDatabase"];

/** Adds the 'TV Shows' service definition to the Application Injector */
angular
    .module("tmdbapitest")
    .service("$tvShows", tvShowsService);
