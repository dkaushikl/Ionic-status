appControllers.controller('dashboardCtrl', function($scope, $stateParams, $state) {

  $scope.goToSetting = function () {
        $state.go("app.setting");
  };
});
