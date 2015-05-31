"use strict";angular.module("gCloudDashoardApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angular-growl","angular-loading-bar"]).config(["$routeProvider","$sceDelegateProvider","cfpLoadingBarProvider","growlProvider",function(a,b,c,d){c.includeSpinner=!0,c.includeBar=!0,d.globalTimeToLive(5e3),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/view",{templateUrl:"views/view.html",controller:"ViewCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location",function(a,b){a.isActive=function(a){return b.path()===a}}]),angular.module("gCloudDashoardApp").controller("MainCtrl",["$scope","$http","baseUrl","growl",function(a,b,c,d){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.upload=function(){var e=a.files[0],f=new FormData;f.append("fileUpload",e),b.post(c+"videos",f,{transformRequest:angular.identity,headers:{"Content-Type":void 0}}).success(function(a){console.log(a),d.success("File Uploaded.")}).error(function(a){d.error(a.message)}),console.log(a.files)}}]),angular.module("gCloudDashoardApp").directive("setFiles",function(){return{template:'<input type="file">',restrict:"A",link:function(a,b,c){b.text("this is the modal directive"),a=a.$parent,b.bind("change",function(b){var c=this.files;a.$apply(function(){a.files=c,b.preventDefault()})})}}}),angular.module("gCloudDashoardApp").constant("baseUrl",function(){var a;switch(window.location.hostname){case"g-cloud.firebaseapp.com":a="https://totemic-rig-699.appspot.com/";break;case"localhost":a="http://localhost:5000/"}return a}()),angular.module("gCloudDashoardApp").controller("ViewCtrl",["$scope","$http","baseUrl","growl",function(a,b,c,d){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.videos=[],a.selectedVideo={},a.init=function(){b.get(c+"videos").success(function(b){a.videos=b.items}).error(function(a){d.error(a.message)})},a.playVideo=function(b){a.selectedVideo=b,a.playing=!0}}]),angular.module("gCloudDashoardApp").directive("playVideo",["$sce",function(a){return{template:'<video controls style="width: 100%;" preload="auto" ng-src="{{link}}" type="{{type}}"></video>',restrict:"E",link:function(b,c,d){b.$watch("selectedVideo",function(c){b.link=a.trustAsResourceUrl(b.selectedVideo.mediaLink),b.type=b.selectedVideo.contentType})}}}]),angular.module("gCloudDashoardApp").filter("formatBytes",function(){return function(a,b){if(0==a)return"0 Byte";var c=1e3,d=b+1||3,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return(a/Math.pow(c,f)).toPrecision(d)+" "+e[f]}});