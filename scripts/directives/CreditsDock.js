
angular.module("movies").directive("creditsDock", function($compile, $filter, $location) {
	
	return {
		restrict: "EA",
		replate: true,
		scope: {
			credits: "="
		},
		link: function(scope, element) {
			
			scope.model = {
				
				directors: $filter("filter")(scope.credits.crew, function(item) { return item.job == "Director"; })
			};
			
			scope.fn = {
				
				creditsHasCast: function() {
					return angular.isArray(scope.credits.cast) && scope.credits.cast.length > 0;
				},
				
				creditsHasDirectors: function() {
					return scope.model.directors.length > 0;
				},
				
				goToPerson: function(person) {
					$location.path("/people/details").search({ id: person.id });
				}
			};
			
			var template = "\
				<div class=\"credits-dock\">\
					<div ng-if=\"fn.creditsHasDirectors()\">\
						<strong>Director:</strong>\
						<span ng-repeat=\"person in model.directors\">\
							<a ng-click=\"fn.goToPerson(person)\">{{ person.name }}</a>\
						</span>\
					</div>\
					<div ng-if=\"fn.creditsHasCast()\">\
						<strong>Actores:</strong>\
						<span ng-repeat=\"person in credits.cast\">\
							<a ng-click=\"fn.goToPerson(person)\">{{ person.name }}</a>\
						</span>\
					</div>\
				</div>";
			
			element.replaceWith($compile(angular.element(template))(scope));
		}
	};
});
