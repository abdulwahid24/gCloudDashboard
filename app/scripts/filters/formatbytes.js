'use strict';

/**
 * @ngdoc filter
 * @name gCloudDashoardApp.filter:formatBytes
 * @function
 * @description
 * # formatBytes
 * Filter in the gCloudDashoardApp.
 */
angular.module('gCloudDashoardApp')
  .filter('formatBytes', function () {
    return function (bytes, decimals) {
	   if(bytes == 0) return '0 Byte';
	   var k = 1000;
	   var dm = decimals + 1 || 3;
	   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	   var i = Math.floor(Math.log(bytes) / Math.log(k));
	   return (bytes / Math.pow(k, i)).toPrecision(dm) + ' ' + sizes[i];
    };
  });
