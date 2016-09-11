/** 'Main' component class */
function mainComponent(
    $http,
    $state
) {
    var self = this;

    self.routeIsMovies = function() {
        return $state.includes("movies");
    };

    self.routeIsPeople = function() {
        return $state.includes("people");
    };

    self.routeIsTvShow = function() {
        return $state.includes("tvshows");
    };

    self.appIsWorking = function() {
        return $http.pendingRequests.length > 0;
    };
}

/** 'Main' component DI */
mainComponent.$inject = [
    "$http",
    "$state"
];

/** Adds the 'Main' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("main", {
        templateUrl: "views/main.html",
        controller: mainComponent
    });
