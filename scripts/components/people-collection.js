/** 'People Collection' component class */
function peopleCollectionComponent(
    $movies,
    $people,
    $state,
    $tvShows
) {
    var self = this;

    self.getPersonThumbImageUrl = $people.getPersonThumbImageUrl;

    self.getFixedPopularity = $people.getFixedPopularity;

    self.getItemTitle = function(item) {
        return item.media_type == "movie" ? item.title : item.name;
    };

    self.getItemThumbImageUrl = function(item) {
        return item.media_type == "movie"
            ? $movies.getMovieThumbImageUrl(item)
            : $tvShows.getTVShowThumbImageUrl(item);
    },

    self.goToItem = function(item) {
        if (item.media_type == "movie") {
            $state.go("movies.details", { movieId: item.id });
        }
        else {
            $state.go("tvshows.details", { tvShowId: item.id });
        }
    }
}

/** 'People Collection' component DI */
peopleCollectionComponent.$inject = [
    "$movies",
    "$people",
    "$state",
    "$tvShows"
];

/** Adds the 'People Collection' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("peopleCollection", {
        bindings: {
            title: "<",
            people: "<"
        },
        templateUrl: "views/people-collection.html",
        controller: peopleCollectionComponent
    });
