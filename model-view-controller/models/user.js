const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number, 
    },
    jobTitle: {
        type: String,
    },
})

const User = mongoose.models.User || mongoose.model("User", Schema)

module.exports = User