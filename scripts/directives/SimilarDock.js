
angular.module("movies").directive("similarDock", function($compile, $location, MoviesProvider, SeriesProvider) {
	
	return {
		restrict: "EA",
		replate: true,
		scope: {
			similar: "=",
			itemType: "@"
		},
		link: function(scope, element) {
			
			scope.fn = {
				
				thereAreSimilarItems: function() {
					return scope.similar.results.length > 0;
				},
				
				getItemType: function() {
					return scope.itemType == "movie" ? "Películas" : "Series";
				},
				
				getItemTitle: function(item) {
					return scope.itemType == "movie" ? item.title : item.name;
				},
				
				getItemThumbImageUrl: function(item) {
					return scope.itemType == "movie" ? MoviesProvider.getMovieThumbImageUrl(item) : SeriesProvider.getSerieThumbImageUrl(item);
				},
				
				goToItem: function(item) {
					$location.path(scope.itemType == "movie" ? "/movies/details" : "/series/details").search({ id: item.id });
				}
				
			};
			
			var template = "\
				<div class=\"bs-callout bs-callout-warning similar-movies-dock\">\
					<h4>{{ fn.getItemType() }} similares</h4>\
					<div ng-if=\"fn.thereAreSimilarItems()\">\
						<span ng-repeat=\"movie in similar.results\" tooltip=\"{{ fn.getItemTitle(movie) }}\">\
							<a ng-click=\"fn.goToItem(movie)\">\
								<img ng-src=\"{{ fn.getItemThumbImageUrl(movie) }}\" ng-alt=\"{{ fn.getItemTitle(movie) }}\" class=\"img-thumbnail\" />\
							</a>\
						</span>\
					</div>\
					<p ng-if=\"!fn.thereAreSimilarItems()\">No hay {{ fn.getItemType() }} similares disponibles.</p>\
				</div>";
			
			element.replaceWith($compile(angular.element(template))(scope));
		}
	};
});
