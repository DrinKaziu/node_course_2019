require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5c901e9e1d3939dd9b7b855d').then((task) => {
  console.log(task);

  return Task.countDocuments({ completed: false }); 
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});