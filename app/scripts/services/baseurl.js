'use strict';

/**
 * @ngdoc service
 * @name gCloudDashoardApp.baseUrl
 * @description
 * # baseUrl
 * Constant in the gCloudDashoardApp.
 */
angular.module('gCloudDashoardApp')
  .constant('baseUrl', (function(){
    var baseUrl;
    switch(window.location.hostname){
      case 'g-cloud.firebaseapp.com':
        baseUrl = 'https://totemic-rig-699.appspot.com/';
        break;
      case 'localhost':
        baseUrl = 'http://localhost:5000/';
        break;
    }
    return baseUrl;
  }()));