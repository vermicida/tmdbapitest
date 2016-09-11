/** Module 'tmdbapitest' setter */
angular
    .module("tmdbapitest", [
        "ui.router",
        "ui.bootstrap",
        "youtube-embed"
    ]);

/** Module 'tmdbapitest' routing configuration */
function routingConfiguration(
    $stateProvider,
    $urlRouterProvider
) {
    $urlRouterProvider
        .otherwise("/movies/upcoming");

    $stateProvider
        // Movies.
        .state("movies", {
            url: "/movies",
            template: "<movies></movies>"
        })
        // Upcoming movies.
        .state("movies.upcoming", {
            url: "/upcoming",
            template: "<movies-collection title='$resolve.title' movies='$resolve.movies'></movies-collection>",
            resolve: {
                title: function() {
                    return "Próximamente";
                },
                movies: ["$movies", function($movies) {
                    return $movies.getUpcomingMovies();
                }]
            }
        })
        // Now playing movies.
        .state("movies.now-playing", {
            url: "/now-playing",
            template: "<movies-collection title='$resolve.title' movies='$resolve.movies'></movies-collection>",
            resolve: {
                title: function() {
                    return "En cartelera";
                },
                movies: ["$movies", function($movies) {
                    return $movies.getNowPlayingMovies();
                }]
            }
        })
        // Top rated movies.
        .state("movies.top-rated", {
            url: "/top-rated",
            template: "<movies-collection title='$resolve.title' movies='$resolve.movies'></movies-collection>",
            resolve: {
                title: function() {
                    return "Más votadas";
                },
                movies: ["$movies", function($movies) {
                    return $movies.getTopRatedMovies();
                }]
            }
        })
        // Popular movies.
        .state("movies.popular", {
            url: "/popular",
            template: "<movies-collection title='$resolve.title' movies='$resolve.movies'></movies-collection>",
            resolve: {
                title: function() {
                    return "De actualidad";
                },
                movies: ["$movies", function($movies) {
                    return $movies.getPopularMovies();
                }]
            }
        })
        // Movie details.
        .state("movies.details", {
            url: "/details/:movieId",
            template: "<movie-details movie='$resolve.movie' details='$resolve.details'></movie-details>",
            resolve: {
                movie: ["$stateParams", "$movies", function($stateParams, $movies) {
                    return $movies.getMovie($stateParams.movieId);
                }],
                details: ["$stateParams", "$movies", function($stateParams, $movies) {
                    return $movies.getMovieDetails($stateParams.movieId);
                }]
            }
        })
        // Movie Search.
        .state("movies.search", {
            url: "/search?key&page",
            template: "<movie-search movies='$resolve.movies' key='$resolve.key' page='$resolve.page'></movie-search>",
            resolve: {
                key: ["$stateParams", function($stateParams) {
                    return $stateParams.key;
                }],
                page: ["$stateParams", function($stateParams) {
                    return $stateParams.page || 1;
                }],
                movies: ["$stateParams", "$movies", function($stateParams, $movies) {
                    return $movies.searchMovies($stateParams.key, $stateParams.page);
                }]
            }
        })
        // People.
        .state("people", {
            url: "/people",
            template: "<people></people>"
        })
        // Popular people.
        .state("people.popular", {
            url: "/popular",
            template: "<people-collection title='$resolve.title' people='$resolve.people'></people-collection>",
            resolve: {
                title: function() {
                    return "De actualidad";
                },
                people: ["$people", function($people) {
                    return $people.getPopularPeople();
                }]
            }
        })
        // Person details.
        .state("people.details", {
            url: "/details/:personId",
            template: "<person-details person='$resolve.person' details='$resolve.details'></person-details>",
            resolve: {
                person: ["$stateParams", "$people", function($stateParams, $people) {
                    return $people.getPerson($stateParams.personId);
                }],
                details: ["$stateParams", "$people", function($stateParams, $people) {
                    return $people.getPersonDetails($stateParams.personId);
                }]
            }
        })
        // Person search.
        .state("people.search", {
            url: "/search?key&page",
            template: "<people-search people='$resolve.people' key='$resolve.key' page='$resolve.page'><people-search>",
            resolve: {
                key: ["$stateParams", function($stateParams) {
                    return $stateParams.key;
                }],
                page: ["$stateParams", function($stateParams) {
                    return $stateParams.page || 1;
                }],
                people: ["$stateParams", "$people", function($stateParams, $people) {
                    return $people.searchPeople($stateParams.key, $stateParams.page);
                }]
            }
        })
        // TV Shows.
        .state("tvshows", {
            url: "/tvshows",
            template: "<tv-shows></tv-shows>"
        })
        // Popular TV shows.
        .state("tvshows.airing-today", {
            url: "/airing-today",
            template: "<tv-shows-collection title='$resolve.title' tv-shows='$resolve.tvShows'></tv-shows-collection>",
            resolve: {
                title: function() {
                    return "Hoy";
                },
                tvShows: ["$tvShows", function($tvShows) {
                    return $tvShows.getAiringTodayTVShows();
                }]
            }
        })
        // Popular TV shows.
        .state("tvshows.on-the-air", {
            url: "/on-the-air",
            template: "<tv-shows-collection title='$resolve.title' tv-shows='$resolve.tvShows'></tv-shows-collection>",
            resolve: {
                title: function() {
                    return "En emisión";
                },
                tvShows: ["$tvShows", function($tvShows) {
                    return $tvShows.getOnTheAirTVShows();
                }]
            }
        })
        // Top rated TV shows.
        .state("tvshows.top-rated", {
            url: "/top-rated",
            template: "<tv-shows-collection title='$resolve.title' tv-shows='$resolve.tvShows'></tv-shows-collection>",
            resolve: {
                title: function() {
                    return "Más votadas";
                },
                tvShows: ["$tvShows", function($tvShows) {
                    return $tvShows.getTopRatedTVShows();
                }]
            }
        })
        // Popular TV shows.
        .state("tvshows.popular", {
            url: "/popular",
            template: "<tv-shows-collection title='$resolve.title' tv-shows='$resolve.tvShows'></tv-shows-collection>",
            resolve: {
                title: function() {
                    return "De actualidad";
                },
                tvShows: ["$tvShows", function($tvShows) {
                    return $tvShows.getPopularTVShows();
                }]
            }
        })
        // TV show details.
        .state("tvshows.details", {
            url: "/details/:tvShowId",
            template: "<tv-show-details tv-show='$resolve.tvShow' details='$resolve.details'></tv-show-details>",
            resolve: {
                tvShow: ["$stateParams", "$tvShows", function($stateParams, $tvShows) {
                    return $tvShows.getTVShow($stateParams.tvShowId);
                }],
                details: ["$stateParams", "$tvShows", function($stateParams, $tvShows) {
                    return $tvShows.getTVShowDetails($stateParams.tvShowId);
                }]
            }
        })
        // TV show search.
        .state("tvshows.search", {
            url: "/search?key&page",
            template: "<tv-show-search tv-shows='$resolve.tvShows' key='$resolve.key' page='$resolve.page'><tv-show-search>",
            resolve: {
                key: ["$stateParams", function($stateParams) {
                    return $stateParams.key;
                }],
                page: ["$stateParams", function($stateParams) {
                    return $stateParams.page || 1;
                }],
                tvShows: ["$stateParams", "$tvShows", function($stateParams, $tvShows) {
                    return $tvShows.searchTVShows($stateParams.key, $stateParams.page);
                }]
            }
        });
}

/** Module 'tmdbapitest' routing configuration DI */
routingConfiguration.$inject = [
    "$stateProvider",
    "$urlRouterProvider"
];

/** Set the module 'tmdbapitest' routing configuration */
angular
    .module("tmdbapitest")
    .config(routingConfiguration);

/** 'The Movie Database' provider configuration */
function theMovieDatabaseConfiguration(
    settings,
    $theMovieDatabaseProvider
) {
    $theMovieDatabaseProvider.setApiVersion(settings.theMovieDatabaseApiVersion);
    $theMovieDatabaseProvider.setApiKey(settings.theMovieDatabaseApiKey);
}

/** 'The Movie Database' provider configuration DI */
theMovieDatabaseConfiguration.$inject = [
    "settings",
    "$theMovieDatabaseProvider"
];

/** Set the 'The Movie Database' provider configuration */
angular
    .module("tmdbapitest")
    .config(theMovieDatabaseConfiguration);
