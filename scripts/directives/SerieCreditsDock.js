
angular.module("movies").directive("serieCreditsDock", function($compile, $location) {
	
	return {
		restrict: "EA",
		replate: true,
		scope: {
			series: "="
		},
		link: function(scope, element) {
			
			scope.fn = {
				
				thereAreSeries: function() {
					return scope.series.cast.length > 0;
				},
				
				goToSerie: function(item) {
					$location.path("/series/details").search({ id: item.id });
				}
			};
			
			var template = "\
				<div class=\"bs-callout bs-callout-warning serie-credits-dock\">\
					<h4>Apariciones en series</h4>\
					<div ng-if=\"fn.thereAreSeries()\">\
						<table class=\"table\">\
							<tbody>\
								<tr ng-repeat=\"serie in series.cast | orderBy:'first_air_date':true\">\
									<td>En <a ng-click=\"fn.goToSerie(serie)\">{{ serie.name }}</a>{{ serie.character | character }}</td>\
									<td>{{ serie.first_air_date | firstAirDate }}</td>\
								</tr>\
							</tbody>\
						</table>\
					</div>\
					<p ng-if=\"!fn.thereAreSeries()\">No hay créditos disponibles.</p>\
				</div>";
			
			element.replaceWith($compile(angular.element(template))(scope));
		}
	};
});
