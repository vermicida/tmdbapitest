/** 'Videos Dock' directive class */
function videosDockDirective(
    $filter,
    $uibModal
) {

    return {
        restrict: "E",
        replate: true,
        scope: {
            videos: "<"
        },
        templateUrl: "views/videos-dock.html",
        link: function(scope) {

            scope.youTubeVideos = $filter("filter")(scope.videos.results, { site: "YouTube" });

            scope.thereAreVideos = function() {
                return scope.youTubeVideos.length > 0;
            };

            scope.openMovieVideoModal = function(video) {
                $uibModal.open({
                    templateUrl: "views/youtube-modal.html",
                    controller: "youtubeModal",
                    resolve: {
                        video: function() { return video; }
                    }
                });
            };
        }
    };
}

/** 'Videos Dock' directive DI */
videosDockDirective.$inject = [
    "$filter",
    "$uibModal"
];

/** Adds the 'Videos Dock' directive definition to the Application Injector */
angular
    .module("tmdbapitest")
    .directive("videosDock", videosDockDirective);
