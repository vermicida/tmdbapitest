/** 'People' service */
function peopleService($theMovieDatabase) {

    this.getPopularPeople = function() {
        return $theMovieDatabase.doRequest("person/popular");
    };

    this.searchPeople = function(name, page) {
        return $theMovieDatabase.doRequest("search/person", {
            query: name,
            page: page || 1
        });
    };

    this.getPerson = function(id) {
        return $theMovieDatabase.doRequest("person/" + id);
    };

    this.getPersonDetails = function(id) {
        return $theMovieDatabase.doRequest("person/" + id, {
            language: "en",
            append_to_response: "movie_credits,tv_credits"
        });
    };

    this.getPersonThumbImageUrl = function(person) {
        return $theMovieDatabase.getImageUrl(person.profile_path, 45);
    };

    this.getPersonDetailsImageUrl = function(person) {
        return $theMovieDatabase.getImageUrl(person.profile_path, 185);
    };

    this.getFixedPopularity = function(person) {
        return person.popularity.toFixed(1);
    };

    this.getIMDBProfileUrl = function(person) {
        return "http://www.imdb.com/name/" + person.imdb_id;
    };
}

/** 'People' service DI */
peopleService.$inject = ["$theMovieDatabase"];

/** Adds the 'People' service definition to the Application Injector */
angular
    .module("tmdbapitest")
    .service("$people", peopleService);
