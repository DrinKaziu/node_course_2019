const request = require('request');

const url = 'https://api.darksky.net/forecast/e79b022885f7770c971c38a56eba6e08/37.8267,-122.4233?units=si';

request({ url: url, json: true }, (error, response) => {
  console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees outside.`);
  console.log(`There is a ${response.body.currently.precipProbability}% chance of precipitation`);
});

//Geocoding - convert address to lat/long format
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic25vd3N1cmZlciIsImEiOiJjanQ0cXZoOGMxNjl1NDRsdnU4MmRzc2J0In0.UakM-dYXURfkPETckOVKVw&limit=1';

request({ url: geocodeUrl, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0];
  const latitude = response.body.features[0].center[1]
  console.log(`The coordinates for ${response.body.features[0].text} are Long: ${longitude}, Lat: ${latitude}`);
})