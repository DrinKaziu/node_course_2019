// CRUD = create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb'); // destructered from above

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.');
  }

  const db = client.db(databaseName);

  // db.collection('users').findOne({name: 'Aspen'}, (error, user) => {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   console.log(user.name);
  // });

  // db.collection('users').find({name: 'Drin'}).toArray((error, users) => {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   console.log(users);
  // })

  // db.collection('users').find({name: 'Drin'}).count((error, count) => {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   console.log(count);
  // })

  db.collection('tasks').findOne({_id: new ObjectID('5c8c09b51646b9c7dec19041')}, (error, task) => {
    if (error) {
      return console.log(error);
    }

    console.log(task);
  });

  db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    if (error) {
      return console.log(error);
    }

    console.log(tasks);
  })
});

