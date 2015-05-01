
angular.module("movies", ["ngRoute", "route-segment", "view-segment", "ui.bootstrap", "youtube-embed"]);

angular.module("movies").config(["$routeProvider", "$routeSegmentProvider", function($routeProvider, $routeSegmentProvider) {
	
	// Movies
	$routeSegmentProvider.when("/movies", "movies");
	$routeSegmentProvider.when("/movies/upcoming", "movies.upcoming");
	$routeSegmentProvider.when("/movies/now_playing", "movies.now_playing");
	$routeSegmentProvider.when("/movies/top_rated", "movies.top_rated");
	$routeSegmentProvider.when("/movies/popular", "movies.popular");
	$routeSegmentProvider.when("/movies/details", "movies.details");
	$routeSegmentProvider.when("/movies/search", "movies.search");
	// People
	$routeSegmentProvider.when("/people", "people");
	$routeSegmentProvider.when("/people/popular", "people.popular");
	$routeSegmentProvider.when("/people/details", "people.details");
	$routeSegmentProvider.when("/people/search", "people.search");
	// Series
	$routeSegmentProvider.when("/series", "series");
	$routeSegmentProvider.when("/series/airing_today", "series.airing_today");
	$routeSegmentProvider.when("/series/on_the_air", "series.on_the_air");
	$routeSegmentProvider.when("/series/top_rated", "series.top_rated");
	$routeSegmentProvider.when("/series/popular", "series.popular");
	$routeSegmentProvider.when("/series/details", "series.details");
	$routeSegmentProvider.when("/series/search", "series.search");
	
	$routeSegmentProvider
		.segment("movies", {
			controller: "MoviesController",
			templateUrl: "views/Movies.html"
		});
	
	$routeSegmentProvider
		.within("movies")
		.segment("upcoming", {
			controller: "MoviesUpcomingController",
			templateUrl: "views/MoviesUpcoming.html",
			resolve: {
				UpcomingMovies: ["MoviesProvider", function(MoviesProvider) {
					return MoviesProvider.getUpcomingMovies();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("movies")
		.segment("now_playing", {
			controller: "MoviesNowPlayingController",
			templateUrl: "views/MoviesNowPlaying.html",
			resolve: {
				NowPlayingMovies: ["MoviesProvider", function(MoviesProvider) {
					return MoviesProvider.getNowPlayingMovies();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("movies")
		.segment("top_rated", {
			controller: "MoviesTopRatedController",
			templateUrl: "views/MoviesTopRated.html",
			resolve: {
				TopRatedMovies: ["MoviesProvider", function(MoviesProvider) {
					return MoviesProvider.getTopRatedMovies();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("movies")
		.segment("popular", {
			controller: "MoviesPopularController",
			templateUrl: "views/MoviesPopular.html",
			resolve: {
				PopularMovies: ["MoviesProvider", function(MoviesProvider) {
					return MoviesProvider.getPopularMovies();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("movies")
		.segment("details", {
			controller: "MoviesDetailsController",
			templateUrl: "views/MoviesDetails.html",
			dependencies: ["id"],
			resolve: {
				Movie: ["$routeParams", "MoviesProvider", function($routeParams, MoviesProvider) {
					return MoviesProvider.getMovie($routeParams.id);
				}],
				MovieDetails: ["$routeParams", "MoviesProvider", function($routeParams, MoviesProvider) {
					return MoviesProvider.getMovieDetails($routeParams.id);
				}]
			}
		});
	
	$routeSegmentProvider
		.within("movies")
		.segment("search", {
			controller: "MoviesSearchController",
			templateUrl: "views/MoviesSearch.html",
			dependencies: ["key", "page"],
			resolve: {
				SearchResult: ["$routeParams", "MoviesProvider", function($routeParams, MoviesProvider) {
					return MoviesProvider.searchMovies($routeParams.key, $routeParams.page);
				}]
			}
		});
	
	$routeSegmentProvider
		.segment("people", {
			controller: "PeopleController",
			templateUrl: "views/People.html"
		});
	
	$routeSegmentProvider
		.within("people")
		.segment("popular", {
			controller: "PeoplePopularController",
			templateUrl: "views/PeoplePopular.html",
			resolve: {
				PopularPeople: ["PeopleProvider", function(PeopleProvider) {
					return PeopleProvider.getPopularPeople();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("people")
		.segment("details", {
			controller: "PeopleDetailsController",
			templateUrl: "views/PeopleDetails.html",
			dependencies: ["id"],
			resolve: {
				Person: ["$routeParams", "PeopleProvider", function($routeParams, PeopleProvider) {
					return PeopleProvider.getPerson($routeParams.id);
				}],
				PersonDetails: ["$routeParams", "PeopleProvider", function($routeParams, PeopleProvider) {
					return PeopleProvider.getPersonDetails($routeParams.id);
				}]
			}
		});
	
	$routeSegmentProvider
		.within("people")
		.segment("search", {
			controller: "PeopleSearchController",
			templateUrl: "views/PeopleSearch.html",
			dependencies: ["key", "page"],
			resolve: {
				SearchResult: ["$routeParams", "PeopleProvider", function($routeParams, PeopleProvider) {
					return PeopleProvider.searchPeople($routeParams.key, $routeParams.page);
				}]
			}
		});
	
	$routeSegmentProvider
		.segment("series", {
			controller: "SeriesController",
			templateUrl: "views/Series.html"
		});
	
	$routeSegmentProvider
		.within("series")
		.segment("airing_today", {
			controller: "SeriesAiringTodayController",
			templateUrl: "views/SeriesAiringToday.html",
			resolve: {
				AiringTodaySeries: ["SeriesProvider", function(SeriesProvider) {
					return SeriesProvider.getAiringTodaySeries();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("series")
		.segment("on_the_air", {
			controller: "SeriesOnTheAirController",
			templateUrl: "views/SeriesOnTheAir.html",
			resolve: {
				OnTheAirSeries: ["SeriesProvider", function(SeriesProvider) {
					return SeriesProvider.getOnTheAirSeries();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("series")
		.segment("top_rated", {
			controller: "SeriesTopRatedController",
			templateUrl: "views/SeriesTopRated.html",
			resolve: {
				TopRatedSeries: ["SeriesProvider", function(SeriesProvider) {
					return SeriesProvider.getTopRatedSeries();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("series")
		.segment("popular", {
			controller: "SeriesPopularController",
			templateUrl: "views/SeriesPopular.html",
			resolve: {
				PopularSeries: ["SeriesProvider", function(SeriesProvider) {
					return SeriesProvider.getPopularSeries();
				}]
			}
		});
	
	$routeSegmentProvider
		.within("series")
		.segment("details", {
			controller: "SeriesDetailsController",
			templateUrl: "views/SeriesDetails.html",
			dependencies: ["id"],
			resolve: {
				Serie: ["$routeParams", "SeriesProvider", function($routeParams, SeriesProvider) {
					return SeriesProvider.getSerie($routeParams.id);
				}],
				SerieDetails: ["$routeParams", "SeriesProvider", function($routeParams, SeriesProvider) {
					return SeriesProvider.getSerieDetails($routeParams.id);
				}]
			}
		});
	
	$routeSegmentProvider
		.within("series")
		.segment("search", {
			controller: "SeriesSearchController",
			templateUrl: "views/SeriesSearch.html",
			dependencies: ["key", "page"],
			resolve: {
				SearchResult: ["$routeParams", "SeriesProvider", function($routeParams, SeriesProvider) {
					return SeriesProvider.searchSeries($routeParams.key, $routeParams.page);
				}]
			}
		});
	
	$routeProvider.otherwise({
		redirectTo: "/movies/upcoming"
	});
	
}]);

angular.module("movies").run(function($rootScope, $http) {
	
	$rootScope.fn = {
		appIsWorking: function() {
			return $http.pendingRequests.length > 0;
		}
	};
	
});
