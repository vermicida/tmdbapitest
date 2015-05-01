
angular.module("movies").controller("PeopleController", function($scope, $routeSegment, $location) {
	
	$scope.$on("PersonSelected", function(event, person) {
		event.stopPropagation();
		$location.path("/people/details").search({ id: person.id });
	});
	
	$scope.$on("MovieSelected", function(event, movie) {
		event.stopPropagation();
		$location.path("/movies/details").search({ id: movie.id });
	});
	
	$scope.$on("SerieSelected", function(event, serie) {
		event.stopPropagation();
		$location.path("/series/details").search({ id: serie.id });
	});
	
	$scope.fn = {
		
		routeIsPopular: function () {
			return $routeSegment.startsWith( "people.popular" );
		},
		
		doSearch: function() {
			$location.path("/people/search").search({ key: $scope.model.search, page: 1 });
		}
	};
	
});
