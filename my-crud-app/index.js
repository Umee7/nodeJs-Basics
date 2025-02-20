const express = require('express');
const app = express();
const PORT = 9000;
const mongoose = require('mongoose');

// Connecting mongoDB 
mongoose.connect("mongodb://127.0.0.1:27017/my-crud-app")
.then(()=>{console.log("mongoDB Connected...")})
.catch((err)=>{console.log("Error: ", err)})

// Schema of our collection
const mySchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    job: {
        type: String,
    }
})

// Collection
const Profile = mongoose.model("profile", mySchema)

// Middleware
app.use(express.urlencoded({extended: false}))

//show all users in database
app.route("/users")
.get(async (req, res)=>{
    const profiles = await Profile.find();
    return res.status(200).json(profiles)
})

//get specific user data
app.route("/:id")
.get(async (req, res)=>{
    const profiles = await Profile.findById(req.params.id);
    if(!profiles) return res.status(404).json("cannot find the user..")
    return res.status(200).json(profiles);
})
// update user data
.patch(async (req, res)=>{
    const body = req.body;
    const profile = await Profile.findByIdAndUpdate(req.params.id, body)
    return res.status(202).json({status: `user ${body.name} is updated...`})
})
//delete user
.delete(async (req, res)=>{
    const body = req.body;
    await Profile.findByIdAndDelete(req.params.id, body)
    return res.status(202).json({status: `user is deleted...`})
})

// create a new user
app.route("/")
.post(async (req, res)=>{
    const body = req.body;
    const profile = await Profile.insertOne(body);
    res.status(201).json({status: `user ${body.name} created...`, body})
})


app.listen(PORT, ()=>{console.log(`Port ${PORT} running...`)})

// Finally made CRUD app using mongoDB. Cheers to me 🥂✨

