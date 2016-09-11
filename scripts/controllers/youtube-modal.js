/** 'YouTube Modal' controller class */
function youtubeModalController(
    $scope,
    $uibModalInstance,
    video
) {
    $scope.video = video;
    $scope.settings = { autoplay: 1 };
    $scope.close = function() { $uibModalInstance.close(); };
}

/** 'YouTube Modal' controller DI */
youtubeModalController.$inject = [
    "$scope",
    "$uibModalInstance",
    "video"
];

/** Adds the 'YouTube Modal' controller definition to the Application Injector */
angular
    .module("tmdbapitest")
    .controller("youtubeModal", youtubeModalController);
