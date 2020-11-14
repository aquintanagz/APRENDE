


      var locations = [
       ['Clinica A', 19.3934516,-99.16259, 1],
       ['Clinica B', 19.3858705,-99.1393601, 2]
      ];  
      // In this example, we center the map, and add a marker, using a LatLng object
      // literal instead of a google.maps.LatLng object. LatLng object literals are
      // a convenient way to add a LatLng coordinate and, in most cases, can be used
      // in place of a google.maps.LatLng object.
      let map;
      
      
      function validaCodigoPostal(str) {
        
        var patt = /^(?:[0-9][0-9]|[1-4]\d|5[0-2])\d{3}$/;
        var result = str.match(patt);
        
        if(result == null )
          return false;
         else
           return true;
           
        
      }

       function getParamValue(paramName)
      {
        var url = window.location.search.substring(1); //get rid of "?" in querystring
        var qArray = url.split('&'); //get key-value pairs
        for (var i = 0; i < qArray.length; i++) 
        {
            var pArr = qArray[i].split('='); //split key and value
            if (pArr[0] == paramName) 
                return pArr[1]; //return value
        }
      }
      
      function mapaInicio2(){
          const mapOptions = {
                zoom: 10,
                center: { lat: locations[0][1], lng: locations[0][2] },
              };
              map = new google.maps.Map(document.getElementById("map"), mapOptions);

              
                    const marker = new google.maps.Marker({
                      // The below line is equivalent to writing:
                      // position: new google.maps.LatLng(-34.397, 150.644)
                      position: new google.maps.LatLng( locations[0][1] ,locations[0][2]  ),
                      //position: { lat: -34.397, lng: 150.644 },
                       icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 10, //tamaño
                        strokeColor: '#f00', //color del borde
                        strokeWeight: 5, //grosor del borde
                        fillColor: '#00f', //color de relleno
                        fillOpacity:1// opacidad del relleno
                      },
                      map: map,
                         labelAnchor: new google.maps.Point(10, 10), // Os lo explico después del CSS.
                    labelClass: "label", // LA CLASE CSS, AQUÍ LLEGA LA MAGIA!!
                    tooltip: '<B>This is a customized tooltip</B>'
                      
                    });
                    
                    marker.tooltipContent = 'this content should go inside the tooltip';

                    const infowindow = new google.maps.InfoWindow({
                    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
                   
                      });
                    
                    /*
                    google.maps.event.addListener(marker, 'click', function () {
                        infowindow.open(map, marker);
                    });*/

                     google.maps.event.addListener(marker, 'mouseover', function () {
                            var point = fromLatLngToPoint(marker.getPosition(), map);
                            $('#marker-tooltip').html(marker.tooltipContent + '<br>Pixel coordinates: ' + point.x + ', ' + point.y).show();
                        });

                       google.maps.event.addListener(marker, 'mouseout', function () {
                        $('#marker-tooltip').hide();
                    });

                    /*  
                    google.maps.event.addListener(marker, 'click', (function(marker, index) {
                       return function() {
                           infowindow.open(map, marker);
                       }
                    })(marker, 0));*/
              
      }

      function fromLatLngToPoint(latLng, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
}


     function initMap() {
        cpostal = getParamValue("codigo");
        
        if (typeof cpostal === "undefined"){
          mapaInicio();
          return;
        }


        busDocumento(cpostal);
       
      }

        function mapaInicio(){

          const myLatLng = { lat: 19.3934516, lng: -99.16259 };
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: myLatLng,
          });
      }


      function busDocumento(idDoc) 
      {
        var nomCar = "/PDF";
        var dia = "/1112";
        var formato = ".pdf";

        window.location.href = "https://storage.cloud.google.com/lit-2020" +dia +nomCar +dia  +"-" +idDoc +formato;
          
      } 


              
 