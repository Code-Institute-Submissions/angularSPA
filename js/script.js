  // create the module and name it mwcApp
  var mwcApp = angular.module('mwcApp', ['ngRoute', 'ngAnimate','ngMaterial', 'ngMessages']);

  // configure our routes
  mwcApp.config(function($routeProvider) {
    $routeProvider

      // route for the home page
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
      });
  });

// this is needed for deep-linking (# bookmark links) to work
// http://stackoverflow.com/questions/31620412/scrolling-to-specific-element-on-different-template-after-clicking-link-angular
mwcApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})

    // create the controller and inject Angular's $scope
  mwcApp.controller('mainController', function($scope,$location, $anchorScroll, $routeParams,$mdDialog) {
    // create a message to display in our view
    $scope.message = 'this is the home page!';
    $scope.pageClass = 'page-home'; //sets individual class for each page (not used at the moment)
    
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.showTradMthd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/tradmthd.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })    
    };
    $scope.showReachWash = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/reachwash.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.      
      })        
    };
    $scope.showQuoteModal = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/quoteform.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.      
      })        
    };   

  });

  mwcApp.controller('pricesController', function($scope,$location, $anchorScroll, $routeParams) {    
    $scope.pageClass = 'page-prices';
  });

  mwcApp.controller('contactController', function($scope,$location, $anchorScroll, $routeParams) {    
    $scope.pageClass = 'page-contact';
  });

  mwcApp.controller('workwithusController', function($scope,$location, $anchorScroll, $routeParams) {    
    $scope.pageClass = 'page-workwithus';
  });

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

