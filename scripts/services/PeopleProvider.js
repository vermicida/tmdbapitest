
angular.module("movies").service("PeopleProvider", function(TMDBProvider) {
	
	var imdbProfileUrl = "http://www.imdb.com/name/";
	
	this.getPopularPeople = function() {
		return TMDBProvider.doRequest("person/popular");
	};
	
	this.searchPeople = function(name, page) {
		return TMDBProvider.doRequest("search/person", { query: name, page: page || 1 });
	};
	
	this.getPerson = function(id) {
		return TMDBProvider.doRequest("person/" + id);
	};
	
	this.getPersonDetails = function(id) {
		return TMDBProvider.doRequest("person/" + id, { language: "en", append_to_response: "movie_credits,tv_credits" });
	};
	
	this.getPersonThumbImageUrl = function(person) {
		return TMDBProvider.getImageUrl(person.profile_path, 45);
	};
	
	this.getPersonDetailsImageUrl = function(person) {
		return TMDBProvider.getImageUrl(person.profile_path, 185);
	};
	
	this.getFixedPopularity = function(person) {
		return person.popularity.toFixed(1);
	};
	
	this.getIMDBProfileUrl = function(person) {
		return imdbProfileUrl + person.imdb_id;
	};
});
