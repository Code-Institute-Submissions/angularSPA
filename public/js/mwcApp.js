  // create the module and name it mwcApp
  var mwcApp = angular.module('mwcApp', ['ngRoute', 'ngAnimate','ngMaterial', 'ngMessages']);

  // configure our routes
  mwcApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      // route for the home page/root
      .when('/', {
        templateUrl : 'templates/home.html',
        controller  : 'mainController'
      })

      // route for the home page
      .when('/home', {
        templateUrl : 'templates/home.html',
        controller  : 'mainController'
      })

      // route for the prices page
      .when('/prices', {
        templateUrl : 'templates/prices.html',
        controller  : 'pricesController'
      })

      // route for the work with us page
      .when('/workwithus', {
        templateUrl : 'templates/workwithus.html',
        controller  : 'workwithusController'
      })

      // route for the contact page
      .when('/contact', {
        templateUrl : 'templates/contact.html',
        controller  : 'contactController'
      })

      .otherwise({
            redirectTo: '/home'
      });
  });

// this is needed for deep-linking (# bookmark links) to work
// http://stackoverflow.com/questions/31620412/scrolling-to-specific-element-on-different-template-after-clicking-link-angular
mwcApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});

