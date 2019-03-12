const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!!<h1>')
});

app.get('/help', (req, res) => {
  res.send({
    name: 'Nacho',
    age: 6
  });
});

app.get('/about', (req, res) => {
  res.send('<h1>This is About page!!<h1>');
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