/** 'People' component class */
function peopleComponent($state) {

    var self = this;

    self.routeIsPopular = function() {
        return $state.is("people.popular");
    };

    self.search = function(text) {
        $state.go("people.search", {
            key: text,
            page: 1
        });
    };
}

/** 'People' component DI */
peopleComponent.$inject = ["$state"];

/** Adds the 'People' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("people", {
        templateUrl: "views/people.html",
        controller: peopleComponent
    });
