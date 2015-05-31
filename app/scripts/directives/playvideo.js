'use strict';

/**
 * @ngdoc directive
 * @name gCloudDashoardApp.directive:playVideo
 * @description
 * # playVideo
 */
angular.module('gCloudDashoardApp')
  .directive('playVideo', function ($sce) {
    return {
      template: '<video controls style="width: 100%;" preload="auto" ng-src="{{link}}" type="{{type}}"></video>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.$watch('selectedVideo', function(data){
        	scope.link = $sce.trustAsResourceUrl(scope.selectedVideo.mediaLink);
        	scope.type = scope.selectedVideo.contentType;	
        });
      }
    };
  });
