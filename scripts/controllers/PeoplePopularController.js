
angular.module("movies").controller("PeoplePopularController", function($scope, PeopleProvider, MoviesProvider, SeriesProvider, PopularPeople) {
	
	$scope.model = {
		
		people: PopularPeople.results
	};
	
	$scope.fn = {
		
		getPersonThumbImageUrl: PeopleProvider.getPersonThumbImageUrl,
		
		getFixedPopularity: PeopleProvider.getFixedPopularity,
		
		goToPerson: function(person) {
			$scope.$emit("PersonSelected", person);
		},
		
		getItemTitle: function(item) {
			return item.media_type == "movie" ? item.title : item.name;
		},
		
		getItemThumbImageUrl: function(item) {
			return item.media_type == "movie" ? MoviesProvider.getMovieThumbImageUrl(item) : SeriesProvider.getSerieThumbImageUrl(item);
		},
		
		goToItem: function(item) {
			$scope.$emit(item.media_type == "movie" ? "MovieSelected" : "SerieSelected", item);
		}
	};
	
});
