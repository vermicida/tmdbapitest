
angular.module("movies").controller("YouTubeModalController", function($scope, $modalInstance, Video) {
	
	$scope.model = {
		
		video: Video,
		
		settings: {
			autoplay: 1
		}
	};
	
	$scope.fn = {
		
		close: function() {
			$modalInstance.close();
		}
	};
	
});
