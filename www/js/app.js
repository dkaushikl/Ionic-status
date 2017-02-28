

window.globalVariable = {

    color: {
        appPrimaryColor: "#00897B",
        fontcolor: "#fff",
        categoryColor: "#eee",
    },
    startPage: {
        url: "/app/dashboard",
        state: "app.dashboard"
    }
};

var app = angular.module('starter', ['ionic', 'starter.controllers', 'ngMaterial', 'ngMessages', 'ngCordova'])

.run(function($ionicPlatform,  $rootScope, $ionicHistory, $state, $mdDialog, $mdBottomSheet) {

  function createCustomStyle(stateName) {
      var customStyle =
          ".material-background {" +
          "   background-color          : " + window.globalVariable.color.appPrimaryColor + " !important;" +
          "   border-style              : none;" +
          "}" +
          ".spinner-android {" +
          "   stroke                    : " + window.globalVariable.color.appPrimaryColor + " !important;" +
          "}";
      switch (stateName) {
          case "app.dashboards" :
              customStyle += dashboardStyle();
              break;
          default:
              customStyle += getDefaultStyle();
              break;
      }
      return customStyle;
  }

  function getDefaultStyle() {
      return "" +
          ".material-background-nav-bar { " +
          "   background-color        : " + window.globalVariable.color.appPrimaryColor + " !important; " +
          "   border-style            : none;" +
          "}" +
          ".md-primary-color {" +
          "   color                     : " + window.globalVariable.color.appPrimaryColor + " !important;" +
          "}";
  }

  function dashboardStyle() {
      return "" +
          ".material-background-nav-bar { " +
          "   background-color        : " + window.globalVariable.color.categoryColor + " !important; " +
          "   border-style            : none;" +
          "}" +
          ".md-primary-color {" +
          "   color                     : " + window.globalVariable.color.categoryColor + " !important;" +
          "}";
  }

  $rootScope.customStyle = createCustomStyle(window.globalVariable.startPage.state);

  $ionicPlatform.ready(function() {

    ionic.Platform.isFullScreen = true;

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    $rootScope.$on('$ionicView.beforeEnter', function () {
        $rootScope.customStyle = createCustomStyle($ionicHistory.currentStateName());
    });

  });
})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider, $mdColorPalette, $mdIconProvider) {
  $ionicConfigProvider.spinner.icon("android");
  $ionicConfigProvider.views.swipeBackEnabled(false);

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu/menu.html',
    controller: 'menuCtrl'
  })

  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })
  .state('app.setting', {
                  url: "/setting",
                  views: {
                      'menuContent': {
                          templateUrl: "templates/setting/setting.html",
                          controller: "settingCtrl"
                      }
                  }
      })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise(window.globalVariable.startPage.url);
});
