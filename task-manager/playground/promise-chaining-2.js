require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5c901e9e1d3939dd9b7b855d').then((task) => {
//   console.log(task);

//   return Task.countDocuments({ completed: false }); 
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count; 
}

deleteTaskAndCount('5c900ef64bc2a3d9f19c2bfd').then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
});