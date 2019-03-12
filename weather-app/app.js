const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

geocode(location, (error, data) => {
  if (location === undefined) {
    console.log('Please provide a location.');
  } else {
    if (error) {
      console.log(error);
    } else {
      forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Forecast for ${data.location}: `);
          console.log(forecastData);
        }
      });
    }
  }
}); 


