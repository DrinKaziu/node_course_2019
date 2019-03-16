// setTimeout(() => {
//   console.log('Two Seconds Are Up!!');
// }, 2000);

// const names = ['Nacho', 'Cooper', 'Stanley'];
// const shortNames = names.filter((name) => {
//   return name.length <= 6;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }

//     callback(data);
//   }, 2000);
// }

// geocode('New York', (data) => {
//   console.log(data);
// });

// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     const sum = num1 + num2;
//     callback(sum);
//   }, 2000)
// }

// add(1, 4, (sum) => {
//   console.log(sum) // Should print: 5
// });

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error', undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
}

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});