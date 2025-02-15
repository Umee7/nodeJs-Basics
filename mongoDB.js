const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/mongodob-practice');

//Schema
const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    }
})

const User = mongoose.model("user", userSchema);

//middleware to get body
app.use(express.urlencoded({extended: false}))

app.route("/")
.get((req, res)=>{
    return res.json({status: "Port Running..."})
})
.post( async (req, res)=>{
    const body = req.body;
    const result = await User.create({
        firstName: body.firstName,
        email: body.email,
    })
    console.log(result);
    return res.status(201).json({status: "success"});
})

app.listen(PORT, ()=> console.log("Port is running well..."));