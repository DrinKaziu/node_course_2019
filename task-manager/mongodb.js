// CRUD = create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.');
  }

  const db = client.db(databaseName);

  // db.collection('users').insertOne({
  //   name: 'Drin', 
  //   age: 36
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user.');
  //   }

  //   console.log(result.ops);
  // });

  // db.collection('users').insertMany([
  //   {
  //     name: 'Nacho',
  //     age: 6
  //   },
  //   {
  //     name: 'Cooper',
  //     age: 4
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert users.');
  //   }

  //   console.log(result.ops);
  // })

  db.collection('tasks').insertMany([
    {
      description: 'Take Drin for a walk',
      completed: false
    }, 
    {
      description: 'Ask Drin for treats',
      completed: false
    }, 
    {
      description: 'Take a nap',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert task(s)');
    }

    console.log(result.ops);
  })
});