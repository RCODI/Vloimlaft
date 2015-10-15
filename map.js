var map;
function initMap() {
	
//var directionsDisplay = new google.maps.DirectionsRenderer;
//var directionsService = new google.maps.DirectionsService;
  // Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "on" }
      ]
    },{
    featureType: "transit.line",
	elementType: "geometry",
    stylers: [
      { color: "#ff6200" },
      { weight: 4}
    ]
  },{
    featureType: "transit.line",
	elementType: "labels",
    stylers: [
	{visibility: "on"}
    ]
  }
  ]; 
  
  /* directionsDisplay.setMap(map);

  calculateAndDisplayRoute(directionsService, directionsDisplay);
  document.getElementById('mode').addEventListener('change', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
   */
  // Create a map object and specify the DOM element for display.
   var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.3, lng: -86.87},
    scrollwheel: true,
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 8
  });
   //google.maps.MapTypeStyleFeatureType(transit.station)
  /* function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var selectedMode = document.getElementById('mode').value;
  directionsService.route({
    origin: {lat: 40.4419, lng: -86.9125},  // Haight.
    destination: {lat: 41.83, lng: -87.68},  // Ocean Beach.
    // Note that Javascript allows us to access the constant
    // using square brackets and a string value as its
    // "property."
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
	});
	} */
}

