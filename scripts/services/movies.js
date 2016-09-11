/** 'Movies' service */
function moviesService($theMovieDatabase) {

    this.getUpcomingMovies = function() {
        return $theMovieDatabase.doRequest("movie/upcoming");
    };

    this.getNowPlayingMovies = function() {
        return $theMovieDatabase.doRequest("movie/now_playing");
    };

    this.getTopRatedMovies = function() {
        return $theMovieDatabase.doRequest("movie/top_rated");
    };

    this.getPopularMovies = function() {
        return $theMovieDatabase.doRequest("movie/popular");
    };

    this.searchMovies = function(name, page) {
        return $theMovieDatabase.doRequest("search/movie", {
            query: name,
            page: page || 1
        });
    };

    this.getMovie = function(id) {
        return $theMovieDatabase.doRequest("movie/" + id);
    };

    this.getMovieDetails = function(id) {
        return $theMovieDatabase.doRequest("movie/" + id, {
            language: "en",
            append_to_response: "credits,videos,similar"
        });
    };

    this.getMovieThumbImageUrl = function(movie) {
        return $theMovieDatabase.getImageUrl(movie.poster_path, 45);
    };

    this.getMovieDetailsImageUrl = function(movie) {
        return $theMovieDatabase.getImageUrl(movie.poster_path, 185);
    };

    this.getFixedMovieVoteAverage = function(movie) {
        return movie.vote_average.toFixed(1);
    };
}

/** 'Movies' service DI */
moviesService.$inject = ["$theMovieDatabase"];

/** Adds the 'Movies' service definition to the Application Injector */
angular
    .module("tmdbapitest")
    .service("$movies", moviesService);
