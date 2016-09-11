/** Adds the 'The Movie Database' provider definition to the Application Injector */
angular
    .module("tmdbapitest")
    .provider("$theMovieDatabase", function() {
        
        var apiVersion = "no-api-version";
        var apiKey = "no-api-key";

        /** The 'The Movie Database' provider config time definition */
        return {
            setApiVersion: function(version) {
                apiVersion = version;
            },
            setApiKey: function(key) {
                apiKey = key;
            },
            /** The 'The Movie Database' provider run time definition */
            $get: ["$http", function($http) {

                var imgUrl = "http://image.tmdb.org/t/p/";
                var apiUri = "https://api.themoviedb.org/" + apiVersion + "/";

                return {
                    doRequest: function(api, parameters) {
                        var config = {
                            params: angular.extend({
                                api_key: apiKey,
                                language: "es",
                                cache: true
                            }, parameters || {})
                        };
                        return $http.get(apiUri + api, config).then(
                            function(response) {
                                return response.data;
                            }
                        );
                    },
                    getImageUrl: function(image, size) {
                        return image
                            ? (imgUrl + "w" + size + (image.indexOf("/") == 0 ? image : "/" + image))
                            : size < 100
                                ? "images/unknown_cover_thumb.png"
                                : "images/unknown_cover_profile.png";
                    }
                };
            }]
        };
    });
