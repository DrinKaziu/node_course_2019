const fs = require('fs');

// const book = {
//   title: 'Grit', 
//   author: 'Angela Duckworth'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Drin";
data.age = 37;

const myData = JSON.stringify(data);

fs.writeFileSync('1-json.json', myData);



