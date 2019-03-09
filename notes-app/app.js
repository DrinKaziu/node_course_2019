const chalk = require('chalk');
const getNotes = require('./notes.js');

const command = process.argv[2];

if (command === 'add') {
  console.log('adding a note');
} else if (command === 'remove') {
  console.log('removing note');
}