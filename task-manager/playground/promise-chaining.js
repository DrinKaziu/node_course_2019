require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5c8ef9c0a76f35d4f683c8c6', { age: 6 }).then((user) => {
//   console.log(user);

//   return User.countDocuments({ age: 6 });
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count; 
}

updateAgeAndCount('5c8ef9c0a76f35d4f683c8c6', 7).then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
});