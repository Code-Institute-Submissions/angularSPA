// Google Map
//http://stackoverflow.com/questions/24246403/angularjs-load-google-map-script-async-in-directive-for-multiple-maps
mwcApp.directive('googleMap', function($rootScope, lazyLoadApi) {

  return {
    restrict: 'CA', // restrict by class name
    scope: {
      mapId: '@id', // map ID
      lat: '@', // latitude
      long: '@' // longitude      
    },
    link: function(scope, element, attrs) {
      var location = null;
      var map = null;
      var mapOptions = null;

      // Check if latitude and longitude are specified
      if (angular.isDefined(scope.lat) && angular.isDefined(scope.long)) {
        // Loads google map script
        lazyLoadApi.then( initializeMap )
      }
      
      // Initialize the map
      function initializeMap() {
        location = new google.maps.LatLng(scope.lat, scope.long);

        mapOptions = {
          zoom: 10,
          center: location,
          mapTypeId: 'roadmap'
        };

        map = new google.maps.Map(element[0], mapOptions);
        
        new google.maps.Polygon({
          paths: ENCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
        });

        new google.maps.Polygon({
          paths: RMCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#4286f4',
          fillOpacity: 0.35,
          map: map,
        });

        new google.maps.Polygon({
          paths: ECCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#42f471',
          fillOpacity: 0.35,
          map: map,
        });

        new google.maps.Polygon({
          paths: IGCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#42f471',
          fillOpacity: 0.35,
          map: map,
        });

        new google.maps.Polygon({
          paths: NCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#5042f4',
          fillOpacity: 0.35,
          map: map,
        });

        new google.maps.Polygon({
          paths: E_Coords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#f1f442',
          fillOpacity: 0.35,
          map: map,
        });        
      }
    }
  };
});

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