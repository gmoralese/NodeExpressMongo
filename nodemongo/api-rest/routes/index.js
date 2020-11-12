'use strict'

const express = require('express');
const api = express.Router();
const userController = require("../controllers/users")

api.get("/users", userController.getUsers);
api.post("/user-create", userController.createUser);
api.get('/user/:id', userController.getUser);
api.delete('/user/:id', userController.deleteUser);
api.put('/user/:id', userController.updateUser);

module.exports = api
