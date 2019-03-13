const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

geocode(address, (error, data) => {
  const { latitude, longitude, location } = data
  
  if (address === undefined) {
    console.log('Please provide a location.');
  } else {
    if (error) {
      console.log(error);
    } else {
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Forecast for ${location}: `);
          console.log(forecastData);
        }
      });
    }
  }
}); 


