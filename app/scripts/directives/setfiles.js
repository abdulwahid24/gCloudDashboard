'use strict';

/**
 * @ngdoc directive
 * @name gCloudDashoardApp.directive:setFiles
 * @description
 * # setFiles
 */
angular.module('gCloudDashoardApp')
  .directive('setFiles', function () {
    return {
      template: '<input type="file">',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the modal directive');
        scope = scope.$parent;
        element.bind('change', function(event){
          var files = this.files;
          scope.$apply(function () {
            scope.files = files;
            event.preventDefault();
          });
        });
      }
    };
  });

