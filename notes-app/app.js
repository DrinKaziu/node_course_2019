const validator = require('validator');
const getNotes = require('./notes.js');

const message = getNotes();

console.log(message);

console.log(validator.isEmail('nachodog.com'));

