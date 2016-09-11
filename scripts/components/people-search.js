/** 'People Search' component class */
function peopleSearchComponent(
    $movies,
    $people,
    $state,
    $tvShows
) {
    var self = this;

    self.pageChanged = function(changes) {
        $state.go("people.search", {
            key: self.key,
            page: self.page
        });
    };

    self.getPersonThumbImageUrl = $people.getPersonThumbImageUrl;
    
    self.getFixedPopularity = $people.getFixedPopularity;
    
    self.getItemTitle = function(item) {
        return item.media_type == "movie"
            ? item.title
            : item.name;
    };
    
    self.getItemThumbImageUrl = function(item) {
        return item.media_type == "movie"
            ? $movies.getMovieThumbImageUrl(item)
            : $tvShows.getTVShowThumbImageUrl(item);
    };
    
    self.goToItem = function(item) {
        if (item.media_type == "movie") {
            $state.go("movies.details", { movieId: item.id });
        }
        else {
            $state.go("tvshows.details", { tvShowId: item.id });
        }
    };
    
    self.shouldShowPaginator = function() {
        return self.people.total_pages > 1;
    };
}

/** 'People Search' component DI */
peopleSearchComponent.$inject = [
    "$movies",
    "$people",
    "$state",
    "$tvShows"
];

/** Adds the 'People Search' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("peopleSearch", {
        bindings: {
            people: "<",
            key: "<",
            page: "<"
        },
        templateUrl: "views/people-search.html",
        controller: peopleSearchComponent
    });
