const express = require('express');
const Router = express.Router();
const User = require('../models/user')
const { handleGetAllUsers,
        handleAddUser,
        handleGetUserByID,
        handleUpdateUserByID,
        handleDeleteUserByID, } = require('../controllers/user')

Router.route("/")
.get(handleGetAllUsers)
.post(handleAddUser)

Router.route("/data/:id")
.get(handleGetUserByID)
.patch(handleUpdateUserByID)
.delete(handleDeleteUserByID)

module.exports = Router;