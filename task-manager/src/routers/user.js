const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');

router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save({ user, token });
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch(e) {
    res.status(400).send(e);
  }
  // user.save().then(() => {
  //   res.status(201).send(user)
  // }).catch((e) => {
  //   res.status(400).send(e)
  // });
});

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch(e) {  
    res.status(400).send();
  }
});

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send()
  } catch (e) {
    res.status(500).send();
  }
});

router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) return res.status(404).send();
    res.send(user);
  } catch(e) {
    res.status(500).send();
  }

  // User.findById(_id).then((user) => {
  //   if (!user) {
  //     return res.status(404).send();
  //   }

  //   res.send(user);
  // }).catch((e) => {
  //   res.status(500).send();
  // });
});

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'age', 'email', 'password'];
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) return res.status(400).send({ error: 'Invalid update(s).'});

  try {
    const user = await User.findById(req.params.id);
    updates.forEach((update) => user[update] = req.body[update]);
    await user.save();
    //const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if (!user) return res.status(404).send();
    res.send(user);
  } catch(e) {
    res.status(400).send(e);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send();
    res.send(user);
  } catch(e) {
    res.status(500).send();
  }
});

module.exports = router; 