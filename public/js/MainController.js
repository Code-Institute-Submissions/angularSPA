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
      templateUrl: 'templates/tradmthd.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })    
    };
    $scope.showReachWash = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/reachwash.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.      
      })        
    };
    $scope.showQuoteModal = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/quoteform.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.      
      })        
    };   
  });