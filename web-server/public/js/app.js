console.log('client side JS file is loaded!!!');

fetch('http://localhost:3000/weather?address=baltimore').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});