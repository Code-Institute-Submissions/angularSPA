//this is for loading several Googlemaps if necessary
mwcApp.service('lazyLoadApi', function lazyLoadApi($window, $q) {
  function loadScript() {
    console.log('loadScript')
      // use global document since Angular's $document is weak
    var s = document.createElement('script')
    s.src = '//maps.googleapis.com/maps/api/js?key=AIzaSyABlmHVEqE46Jgh9fvERagzKHKUHK9P9B4&callback=initMap'
    document.body.appendChild(s)
  }
  var deferred = $q.defer()

 $window.initMap = function() {
    deferred.resolve()
  }

  if ($window.attachEvent) {
    $window.attachEvent('onload', loadScript)
  } else {
    $window.addEventListener('load', loadScript, false)
  }

  return deferred.promise
});

//returns a postcode list from postcodes.json file
  mwcApp.service("postcodeCheckService", function($http, $q) 
  {  
    var deffered = $q.defer();
    $http.get('area_coordinates/postcodes.json').then(function(data) 
    {      
      deffered.resolve(data);            
    });

    this.getPostcodes = function ()
    {      
      return deffered.promise;      
    }
  });

