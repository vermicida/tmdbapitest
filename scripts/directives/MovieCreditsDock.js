
angular.module("movies").directive("movieCreditsDock", function($compile, $location) {
	
	return {
		restrict: "EA",
		replate: true,
		scope: {
			movies: "="
		},
		link: function(scope, element) {
			
			scope.fn = {
				
				thereAreMovies: function() {
					return scope.movies.cast.length > 0;
				},
				
				goToMovie: function(item) {
					$location.path("/movies/details").search({ id: item.id });
				}
			};
			
			var template = "\
				<div class=\"bs-callout bs-callout-danger movie-credits-dock\">\
					<h4>Apariciones en películas</h4>\
					<div ng-if=\"fn.thereAreMovies()\">\
						<table class=\"table\">\
							<tbody>\
								<tr ng-repeat=\"movie in movies.cast | orderBy:'release_date':true\">\
									<td>En <a ng-click=\"fn.goToMovie(movie)\">{{ movie.title }}</a>{{ movie.character | character }}</td>\
									<td>{{ movie.release_date | releaseDate }}</td>\
								</tr>\
							</tbody>\
						</table>\
					</div>\
					<p ng-if=\"!fn.thereAreMovies()\">No hay créditos disponibles.</p>\
				</div>";
			
			element.replaceWith($compile(angular.element(template))(scope));
		}
	};
});
