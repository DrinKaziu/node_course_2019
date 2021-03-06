const express = require('express');
require('./db/mongoose');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');


const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
// });

// app.use((req, res, next) => {
//   if(req.method === 'GET') {
//     res.status(503).send('Under construction...');
//   } else {
//     next();
//   }
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const jwt = require('jsonwebtoken');

const myFunction = async () => {
  const token = jwt.sign({ _id: '123abc' }, 'thisistaskmanagerapp', { expiresIn: '7 days' });
  console.log(token);

  const data = jwt.verify(token, 'thisistaskmanagerapp');
  console.log(data);
}

myFunction();