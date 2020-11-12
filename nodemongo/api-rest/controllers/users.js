'use strict'
const User = require("../models/user");

async function createUser(req, res) {
  const user = new User({ 
    username: req.query.username,
    age: req.query.age,
    phone: req.query.phone 
  });

  await user.save().then(() => console.log("User created"));

  res.send("User created \n");
}

async function getUser(req, res) {
  let id = req.params.id;

  await User.findById(id, (err, user) => {
    if (err) return res.status(500).send({message: 'Error al realizar la peticion'});
    if (!user) return res.status(400).send({message: 'El usuario no existe'});
  
    res.status(200).send({ user })
  });
}

async function getUsers(req, res) {
  const users = await User.find();

  res.json(users);
}

async function updateUser(req,res) {
  let id = req.params.id;
  let update = req.query;

  await User.findByIdAndUpdate(id, update, (err, user) => {
    if (err) res.status(500).send({message: 'Error al editar usuario'});
    
    res.status(200).send({ user });
  })
}

async function deleteUser(req, res) {
  let id = req.params.id;

  await User.findById(id, (err, user) => {
    if (err) res.status(500).send({message: 'Error al borrar usuario'});
    
    user.remove(err => {
      if (err) res.status(500).send({message: 'Error al borrar usuario'});
      res.status(200).send({message: 'EL usuario ha sido eliminado'});
    })
  })
}

module.exports = {
  createUser, getUser, getUsers, updateUser, deleteUser
}
