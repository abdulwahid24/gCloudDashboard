'use strict';

/**
 * @ngdoc overview
 * @name gCloudDashoardApp
 * @description
 * # gCloudDashoardApp
 *
 * Main module of the application.
 */
angular
  .module('gCloudDashoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-growl',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider, $sceDelegateProvider, cfpLoadingBarProvider, growlProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;
    growlProvider.globalTimeToLive(5000);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/view', {
        templateUrl: 'views/view.html',
        controller: 'ViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope, $location){
    $rootScope.isActive = function(path){
      return $location.path() === path;
    }
  });
