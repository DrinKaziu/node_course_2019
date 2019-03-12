const https = require('https');

const url = 'https://api.darksky.net/forecast/e79b022885f7770c971c38a56eba6e08/40,-75?units=us';

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body);
  });
});

response.on('error', (error) => {
  console.log('Error: ', error);
})

request.end();