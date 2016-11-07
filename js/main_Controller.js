  mwcApp.controller('mainController', function($scope,$location, $anchorScroll, $routeParams,$mdDialog) {        
    $scope.pageClass = 'page-home'; //sets individual class for each page   
    $scope.status = '  ';
    $scope.customFullscreen = false;

    // dialogs:    

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