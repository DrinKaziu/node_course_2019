const path = require('path');
const express = require('express');
const hbs = require('hbs');

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
  res.send({
    location: 'New York',
    forecast: 'Cold'
  });
});

app.listen(3000, () => {
  console.log('Server is running!!');
});