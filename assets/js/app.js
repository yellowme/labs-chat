var app = angular.module('chat',['ngRoute','LocalStorageModule','ngMaterial','ui.bootstrap']); 

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider.when('/',{
    templateUrl : 'templates/index.html',
    controller : 'ChatController',
  }).otherwise({
    redirectTo: '/'
  });
}]);