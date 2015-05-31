'use strict';

/**
 * @ngdoc function
 * @name gCloudDashoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gCloudDashoardApp
 */
angular.module('gCloudDashoardApp')
  .controller('MainCtrl', function ($scope, $http, baseUrl, growl) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.upload = function(){
    	var file = $scope.files[0];
    	var fd = new FormData();
        fd.append('fileUpload', file);
        $http.post(baseUrl+'videos', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function (data) {
            console.log(data);
            growl.success('File Uploaded.')
          }).error(function (data) {
            growl.error(data.message);
          })
    	console.log($scope.files);
    }
  });
