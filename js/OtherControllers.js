mwcApp.controller('pricesController', function($scope,$location, $anchorScroll, $routeParams) {    
  $scope.pageClass = 'page-prices';
});

mwcApp.controller('contactController', function($scope,$location, $anchorScroll, $routeParams, $http, postcodeCheckService, $route) {    
  $scope.pageClass = 'page-contact';
  $scope.submit = function(contactform) {  
  //see quoteformController below for an example of POST request
    var promise = postcodeCheckService.getPostcodes().then(function(data){        
      var checkinlist = checkPostcode(data.data.postcodes, postcode.value);      
      if (checkinlist){
        window.alert("Thanks for getting in touch. MWC covers your postcode regularly and we will get in touch within 24 hours.");
      } else {
        window.alert("Thanks for getting in touch. MWC does not cover your postcode regularly at present, but we will get in touch within 24 hours to see if we can still meet your needs.");
      };        
      $route.reload();      
    });
  };
});  

mwcApp.controller('workwithusController', function($scope,$location, $anchorScroll, $routeParams) {    
  $scope.pageClass = 'page-workwithus';
});

mwcApp.controller('quoteformController', function($scope,$location, $anchorScroll, $routeParams, $filter, $mdDialog) {    
  $scope.pageClass = 'page-quoteform';    

  $scope.chkbxs = 
  [{label:"All Outsides", val:false },
  {label:"Conservatory", val:false },
  {label:"Conservatory roof", val:false},
  {label:"Additional glass", val:false },
  {label:"Frame cleaning", val:false },
  ];

  $scope.workChosen = function() {
    var trues = $filter("filter")($scope.chkbxs , {val:true} );
    return trues.length;
  };

  $scope.submit = function() {
    //see contactController above for an example of form validation
  	 	window.alert("Your quote has been submitted");
  	 	$mdDialog.hide()

// $http sumbission would take the form:
    //   $http({
    //     method  : 'POST',
    //     url     : 'form processing url goes here,
    //     data    : $.param(form variables go here),  // pass in data as strings
    //     headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    //   })
    //   .success(function(data) {
    //     console.log(data);
    //     if (!data.success) {
    //     // if not successful, bind errors to error variables
    //     $scope.errorName = data.errors.name;
    //     $scope.errorCustom = data.errors.Custom;
    //   } else {
    //     // if successful, bind success message to message
    //     $scope.message = data.message;
    //   }
    // });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  };
});
mwcApp.controller('homeController', function($scope, postcodeCheckService) {    
  $scope.pageClass = 'page-home';

  $scope.checkPcode = function(pcodeform){    
      var promise = postcodeCheckService.getPostcodes().then(function(data){        
      var checkinlist = checkPostcode(data.data.postcodes, postcode.value);      
      if (checkinlist){
        window.alert("Good news, My Window Cleaner covers your postcode regularly!");
      } else {
        window.alert("Sorry, My Window Cleaner does not cover your postcode regularly at present, but get in touch to see if if we can add your area in the near future.");
      };        
    });
  };
});
//end