/** 'TV Shows Collection' component class */
function tvShowsCollectionComponent($tvShows) {
    this.getFixedTVShowVoteAverage = $tvShows.getFixedTVShowVoteAverage;
    this.getTVShowThumbImageUrl = $tvShows.getTVShowThumbImageUrl;
}

/** 'TV Shows Collection' component DI */
tvShowsCollectionComponent.$inject = ["$tvShows"];

/** Adds the 'TV Shows Collection' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("tvShowsCollection", {
        bindings: {
            title: "<",
            tvShows: "<"
        },
        templateUrl: "views/tv-shows-collection.html",
        controller: tvShowsCollectionComponent
    });
