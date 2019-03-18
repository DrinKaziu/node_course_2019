const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true, 
    trim: true, 
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Please enter a valid email')
      }
    }
  },
  password: {
    type: String, 
    requried: true,
    trim: true, 
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password must not contain "password"');
      }
    }
  },
  age: {
    type: Number,
    default: 0, 
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number.')
      }
    }
  }
});

// const me = new User({
//   name: 'Drin',
//   age: 36,
//   email: 'drin@nacho.com',
//   password: '1234567s'
// });

// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log('Error: ', error);
// });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  }, 
  completed: {
    type: Boolean,
    default: false
  }
});

const task = new Task({
  description: 'Ask             for            treats!!'
});

task.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});