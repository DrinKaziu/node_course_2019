const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up Handlebars and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App', 
    name: 'Drin Kaziu'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Drin Kaziu'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page!!',
    message: 'What can I help you with?',
    name: 'Drin Kaziu'
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide a location'
    });
  } 
  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {   // latitude, longitude and location come from destructuing data
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }
      res.send({
        location: location,
        forecast: forecastData,
        address: req.query.address
      });
    });
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Help article not found',
    name: 'Drin Kaziu'
  });
})

app.get('*', (req,  res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page Not Found',
    name: 'Drin Kaziu'
  });
})

app.listen(3000, () => {
  console.log('Server is running!!');
});