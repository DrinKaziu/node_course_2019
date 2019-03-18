require('../src/db/mongoose');

const User = require('../src/models/user');



User.findByIdAndUpdate('5c8ef9c0a76f35d4f683c8c6', { age: 6 }).then((user) => {
  console.log(user);

  return User.countDocuments({ age: 6 });
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e);
});