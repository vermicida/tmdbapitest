
angular.module("movies").directive("videosDock", function($filter, $compile, $modal) {
	
	return {
		restrict: "EA",
		replate: true,
		scope: {
			videos: "="
		},
		link: function(scope, element) {
			
			scope.model = {
				
				youTubeVideos: $filter("filter")(scope.videos.results, function(item) { return item.site == "YouTube"; })
			};
			
			scope.fn = {
				
				thereAreVideos: function() {
					return scope.model.youTubeVideos.length > 0;
				},
				
				openMovieVideoModal: function(video) {
					$modal.open({
						templateUrl: "views/YouTubeModal.html",
						controller: "YouTubeModalController",
						resolve: {
							Video: function() { return video; }
						}
					});
				}
			};
			
			var template = "\
				<div class=\"bs-callout bs-callout-danger\">\
					<h4>Vídeos</h4>\
					<ol ng-if=\"fn.thereAreVideos()\">\
						<li ng-repeat=\"video in model.youTubeVideos\">\
							<a ng-click=\"fn.openMovieVideoModal(video)\">{{ video.name }}</a>\
						</li>\
					</ol>\
					<p ng-if=\"!fn.thereAreVideos()\">No hay vídeos disponibles.</p>\
				</div>";
			
			element.replaceWith($compile(angular.element(template))(scope));
		}
	};
});
