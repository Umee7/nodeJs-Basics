const User = require('../models/user')

async function handleGetAllUsers(req, res) {
    const users = await User.find();
    return res.json(users);
}

async function handleAddUser(req, res) {
    const body = req.body;
    const newUser = await User.create({
        name: body.name,
        age: body.age,
        jobTitle: body.jobTitle,
    })
    return res.status(201).json(newUser);
}

async function handleGetUserByID(req, res) {
    const user = await User.findById(req.params.id)
    return res.status(200).json(user);
}

async function handleUpdateUserByID(req, res) {
    const body = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, body )
    return res.status(200).json({status: "updated.."})
}

async function handleDeleteUserByID(req, res) {
    const body = req.body;
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({status: "deleted.."})
}

module.exports = {
    handleGetAllUsers, 
    handleAddUser,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
}