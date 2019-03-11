const request = require('request');

const url = 'https://api.darksky.net/forecast/e79b022885f7770c971c38a56eba6e08/37.8267,-122.4233?units=si&lang=es';

request({ url: url, json: true }, (error, response) => {
  console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees outside.`);
  console.log(`There is a ${response.body.currently.precipProbability}% chance of precipitation`);
});