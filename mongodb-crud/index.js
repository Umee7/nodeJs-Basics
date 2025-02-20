const express = require('express')
const app = express();
const PORT = 8000;

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/mycrudapp")

//Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
})

const User = mongoose.model("user", userSchema);

// Middleware to get body data
app.use(express.urlencoded({extended: false}))

app.route("/")
.get((req, res)=>{
    return res.json({status: "running"})
})
.post(async (req, res)=>{
    const body = req.body;
    await User.create({
        name: body.name,
        age: body.age,
    })
    return res.status(201).json(`user ${body.name} created...`);
})


app.route("/user/:id")
.get(async (req, res)=>{
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
    return res.json({user})
})
.patch(async (req, res)=>{
    await User.findByIdAndUpdate(req.params, {name: "new"})
    return res.json({status: "user updated..."})
})
.delete(async (req, res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "user deleted..."})
})


app.listen(PORT, ()=>{console.log(`port ${PORT} running...`)})