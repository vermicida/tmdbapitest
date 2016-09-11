/** 'Movies Collection' component class */
function moviesCollectionComponent($movies) {
    this.getFixedMovieVoteAverage = $movies.getFixedMovieVoteAverage;
    this.getMovieThumbImageUrl = $movies.getMovieThumbImageUrl;
}

/** 'Movies Collection' component DI */
moviesCollectionComponent.$inject = ["$movies"];

/** Adds the 'Movies Collection' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("moviesCollection", {
        bindings: {
            title: "<",
            movies: "<"
        },
        templateUrl: "views/movies-collection.html",
        controller: moviesCollectionComponent
    });
