/** 'Person Details' component class */
function personDetailsComponent(
    $people,
    $sce,
    $window
) {
    var self = this;

    self.goBack = function() {
        $window.history.back();
    };

    self.getPersonDetailsImageUrl = function() {
        return $people.getPersonDetailsImageUrl(self.person);
    };
    
    self.personHasBiography = function() {
        return self.person.biography && self.person.biography.length > 0;
    };
    
    self.getPersonBiography = function() {
        return $sce.trustAsHtml(self.person.biography);
    };
    
    self.personHasDeathdate = function() {
        return self.person.deathday && self.person.deathday.length > 0;
    };
    
    self.getIMDBProfileUrl = function() {
        return $people.getIMDBProfileUrl(self.person);
    };
}

/** 'Person Details' component DI */
personDetailsComponent.$inject = [
    "$people",
    "$sce",
    "$window"
];

/** Adds the 'Person Details' component definition to the Application Injector */
angular
    .module("tmdbapitest")
    .component("personDetails", {
        bindings: {
            person: "<",
            details: "<"
        },
        templateUrl: "views/people-details.html",
        controller: personDetailsComponent
    });
