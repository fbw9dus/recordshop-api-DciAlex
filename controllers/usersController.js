
const User = require('../models/User');


exports.getUsers = (req, res, next) => {
  const users    = await User.find()
  res.status(200).send(users);
};

exports.getUser = (req, res, next) => {
  const { id }  = req.params;
  const user    = await User.findById(id)
  res.status(200).send(user);
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  const user   = await User.findById(id)
  res.status(200).send(user);
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const dt     = req.body;
  const user   = await User.findByIdAndUpdate(id,dt,{new:true})
  res.status(200).send(user);
};

exports.addUser  = (req, res, next) => {
  const userData = req.body;
  const user     = new User(userData)
  await user.save()
  res.status(200).send(user);
};
