  // create the module and name it mwcApp
  var mwcApp = angular.module('mwcApp', ['ngRoute', 'ngAnimate']);

  // configure our routes
  mwcApp.config(function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/home', {
        templateUrl : 'templates/home.html',
        controller  : 'mainController'
      })

      // route for the about page
      .when('/about', {
        templateUrl : 'templates/about.html',
        controller  : 'aboutController'
      })

      // route for the contact page
      .when('/contact', {
        templateUrl : 'templates/contact.html',
        controller  : 'contactController'
      });
  });

  // create the controller and inject Angular's $scope
  mwcApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.pageClass = 'page-home';
  });

  mwcApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.pageClass = 'page-about';
  });

  mwcApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.pageClass = 'page-contact';
  });