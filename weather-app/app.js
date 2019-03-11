const request = require('request');

const url = 'https://api.darksky.net/forecast/e79b022885f7770c971c38a56eba6e08/37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
  
});