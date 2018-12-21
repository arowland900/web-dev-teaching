
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var map;

function fetchData() {
    axios.get(weekly_quakes_endpoint)
    .then(res => {
        var allQuakes = res.data.features                               // create quakes variable, an array that holds all quake data
        console.log(allQuakes)
        allQuakes.forEach(q => {
            var info = document.getElementById('info');                 // create info variable
            var node = document.createElement("P");                     // Create a <p> node
            var textnode = document.createTextNode(q.properties.title);         // Create a text node
            node.appendChild(textnode);                                 // Append the text to <p>
            info.appendChild(node);                                     // Append <p> to <div>

            // -------------------------------------------------------------------------------------//
            
            var coords = q.geometry.coordinates;                        // create coordinates variable, by utilizing the google maps API  
            var latLng = new google.maps.LatLng(coords[1],coords[0]);   // create latitude and longitude coordinate
            var marker = new google.maps.Marker({                       // create marker coordinate. use marker coordinate to show latLng on map
                position: latLng,
                map: map,
                icon: {
                    url: 'images/earthquake.png',
                    scaledSize: new google.maps.Size(10, 10), // scaled size
                }
            });
        })

        // for (var i = 0; i < results.features.length; i++) {
        //     var coords = results.features[i].geometry.coordinates;
        //     var latLng = new google.maps.LatLng(coords[1],coords[0]);
        //     var marker = new google.maps.Marker({
        //         position: latLng,
        //         map: map
        //     });
        // }
    })
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.0522, lng: -118.243},
        zoom: 8
    });
}

fetchData();
initMap();