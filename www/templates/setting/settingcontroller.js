appControllers.controller('settingCtrl', function ($scope, $state,$ionicHistory,$ionicViewSwitcher) {
    $scope.navigateTo = function()
    {
      $state.go("app.dashboard");
    };

    $scope.favourite = function () {
      $state.go("app.favourite");
    };

    $scope.exit = function () {
        console.log("dk");
        ionic.Platform.exitApp();
    };

    $scope.feedback = function () {
      $state.go("app.feedback");
    };
});
