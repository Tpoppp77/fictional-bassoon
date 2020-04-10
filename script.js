//building the urls
//google maps-places api
function buildGoogleMapsQueryURL () {
    let placesURL = "https://maps.googleapis.com/maps/api/place/details/json?"

    let placesParams = { "api-key": "AIzaSyB4cz-a_rR5ipY6dvofPLFZlXM8rqBf9m4"};
//capture user input
    placesParams.q = $("")
    .val()
    .trim();
    
};
//here-geocode api
function buildLandmarkQueryURL () {
    let landmarkURL = "https://geocoder.ls.hereapi.com/6.2/geocode.json?";

    let landmarkParams = { "api-key": "ycuPAj5Im1MQ8vetcyjwUHNdZIyMVSXumgNZexhZbVw"};
    
};
//open weather api
function buildWeatherQueryURL () {
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?";

    let weatherParams = { "api-key": "8687ae869660372bd7eda0e4209f6ab5"};
    
    weatherParams.q = $("")
    .val()
    .trim();
    
};