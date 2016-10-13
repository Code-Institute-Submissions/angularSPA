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
    $scope.message = 'Look! I am an prices page.';
    $scope.pageClass = 'page-prices';
  });

  mwcApp.controller('contactController', function($scope,$location, $anchorScroll, $routeParams) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.pageClass = 'page-contact';
  });

  mwcApp.controller('workwithusController', function($scope,$location, $anchorScroll, $routeParams) {
    $scope.message = 'Work With My WindowCleaner';
    $scope.pageClass = 'page-workwithus';
  });

// Google Map Controller /////////////////////////////////////////////////////
mwcApp.controller('MapCtrl', function($scope) {

var mapOptions = {
  zoom: 4,
  center: new google.maps.LatLng(40.0000, -98.0000),
  mapTypeId: google.maps.MapTypeId.TERRAIN
}

$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

$scope.markers = [];

var infoWindow = new google.maps.InfoWindow();

var createMarker = function(info) {

  var marker = new google.maps.Marker({
    map: $scope.map,
    position: new google.maps.LatLng(info.lat, info.long),
    title: info.city
  });
  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
    infoWindow.open($scope.map, marker);
  });

  $scope.markers.push(marker);

}

$scope.openInfoWindow = function(e, selectedMarker) {
  e.preventDefault();
  google.maps.event.trigger(selectedMarker, 'click');
}

});
//end Google Map Controller////////////////////////////////////////////////
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

