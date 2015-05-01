
angular.module("movies").service("TMDBProvider", function($q, $http) {
	
	var apiUrl = "https://api.themoviedb.org/3/";
	var apiKey = ""; // Set your own The Movie Database API key: http://www.themoviedb.org/documentation/api
	var imgUrl = "http://image.tmdb.org/t/p/";
	
	this.doRequest = function(api, parameters) {
		
		var deferred = $q.defer();
		var config = { params: angular.extend({ api_key: apiKey, language: "es", cache: true }, parameters || {}) };
		
		$http
			.get(apiUrl + api, config)
			.then(
				function(response) { deferred.resolve(response.data); },
				function() { deferred.reject(); }
			);
		
		return deferred.promise;
	};
	
	this.getImageUrl = function(image, size) {
		return image ? ( imgUrl + "w" + size + ( image.indexOf("/") == 0 ? image : "/" + image) ) : size < 100 ? "styles/images/unknown_cover_thumb.png" : "styles/images/unknown_cover_profile.png";
	};
	
});
