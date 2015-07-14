//create angular module for application
var app = angular.module( 'TravelManagement', ['ngRoute'] );

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/new', {
            templateUrl: '/angular_views/new.html',
            controller: 'CustomerCtrl'
        }).
        when('/update/:updateId', {
              templateUrl: 'angular_views/new.html',
              controller: 'CustomerCtrl'
        }).
         when('/detail/:id', {
              templateUrl: 'angular_views/new.html',
              controller: 'CustomerCtrl'
        }).
        otherwise({
            templateUrl: '/angular_views/home.html',
            controller: 'HomeCtrl'
        });
  }]);


//define vehicle factory 
app.factory('CustomerFactory', function () {
  return [];    // Return an array
});