/** 'TV Shows Details' component class */
function tvShowDetailsComponent(
    $sce,
    $tvShows,
    $window
) {
    var self = this;

    self.goBack = function() {
        $window.history.back();
    };

    self.getTVShowDetailsImageUrl = $tvShows.getTVShowDetailsImageUrl;

    self.tvShowHasOriginalName = function() {
        return self.tvShow.name != self.tvShow.original_name;
    };

    self.tvShowHasOverview = function() {
        return self.tvShow.overview && self.tvShow.overview.length > 0;
    };

    self.getTVShowOverview = function() {
        return $sce.trustAsHtml(self.tvShow.overview);
    };
}

/** 'TV Shows Details' component DI */
tvShowDetailsComponent.$inject = [
    "$sce",
    "$tvShows",
    "$window"
];

/** Adds the 'TV Shows Details' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("tvShowDetails", {
        bindings: {
            tvShow: "<",
            details: "<"
        },
        templateUrl: "views/tv-shows-details.html",
        controller: tvShowDetailsComponent
    });
