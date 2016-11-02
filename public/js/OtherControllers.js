mwcApp.controller('pricesController', function($scope,$location, $anchorScroll, $routeParams) {    
    $scope.pageClass = 'page-prices';
  });

  mwcApp.controller('contactController', function($scope,$location, $anchorScroll, $routeParams) {    
    $scope.pageClass = 'page-contact';
    $scope.submit = function() {
    // all the validation is done before submit
    window.alert("Thanks you for getting in touch!");
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
    var trues = $filter("filter")( $scope.chkbxs , {val:true} );
    return trues.length;
	};

	 $scope.submit = function() {
	 	// all the validation is done before submit
	 	window.alert("Your quote has been submitted");
	 	$mdDialog.hide()
      };
  });



  