const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!!')
});

app.get('/help', (req, res) => {
  res.send('This is the Help page');
});

app.get('/about', (req, res) => {
  res.send('This is About page!!');
});

app.get('/weather', (req, res) => {
  res.send('This is the Weather page!!');
});

app.listen(3000, () => {
  console.log('Server is running!!');
});