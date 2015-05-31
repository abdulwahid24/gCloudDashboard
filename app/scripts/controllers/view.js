'use strict';

/**
 * @ngdoc function
 * @name gCloudDashoardApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the gCloudDashoardApp
 */
angular.module('gCloudDashoardApp')
  .controller('ViewCtrl', function ($scope, $http, baseUrl, growl) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.videos = [];
    $scope.selectedVideo = {};

    $scope.init = function(){
    	$http.get(baseUrl+'videos').success(function(data){
    		$scope.videos = data.items;
    	}).error(function(data){
    		growl.error(data.message);
    	})
    };

    $scope.playVideo = function(video){
    	$scope.selectedVideo = video;
    	$scope.playing = true;
    }

  });
