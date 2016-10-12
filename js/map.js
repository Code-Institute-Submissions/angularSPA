 // kmls converted with http://www.gpsvisualizer.com/
 function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 51.618953, lng: 0.080216},
          mapTypeId: 'roadmap'
        });


        // Construct the polygon.
        var ENArea = new google.maps.Polygon({
          paths: ENCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        ENArea.setMap(map);

         var RMArea = new google.maps.Polygon({
          paths: RMCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#4286f4',
          fillOpacity: 0.35
        });
        RMArea.setMap(map);

         var ECArea = new google.maps.Polygon({
          paths: ECCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#42f471',
          fillOpacity: 0.35
        });
        ECArea.setMap(map);

         var IGArea = new google.maps.Polygon({
          paths: IGCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#42f471',
          fillOpacity: 0.35
        });
        IGArea.setMap(map);

         var NArea = new google.maps.Polygon({
          paths: NCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#5042f4',
          fillOpacity: 0.35
        });
        NArea.setMap(map);

        var EArea = new google.maps.Polygon({
          paths: E_Coords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#f1f442',
          fillOpacity: 0.35
        });
        EArea.setMap(map);



      }


