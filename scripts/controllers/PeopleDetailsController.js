
angular.module("movies").controller("PeopleDetailsController", function($scope, $window, $sce, PeopleProvider, Person, PersonDetails) {
	
	$scope.model = {
		
		person: Person,
		
		details: PersonDetails
	};
	
	$scope.fn = {
		
		goBack: function() {
			$window.history.back();
		},
		
		getPersonDetailsImageUrl: function() {
			return PeopleProvider.getPersonDetailsImageUrl($scope.model.person);
		},
		
		personHasBiography: function() {
			return $scope.model.person.biography && $scope.model.person.biography.length > 0;
		},
		
		getPersonBiography: function() {
			return $sce.trustAsHtml($scope.model.person.biography);
		},
		
		personHasDeathdate: function() {
			return $scope.model.person.deathday && $scope.model.person.deathday.length > 0;
		},
		
		getIMDBProfileUrl: function() {
			return PeopleProvider.getIMDBProfileUrl($scope.model.person);
		}
	};
	
});
