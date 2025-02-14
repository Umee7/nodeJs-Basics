const express = require('express')
const fs = require('fs')
const app = express();
const users = require('./MOCK_DATA.json')
const PORT = 7000;

app.use(express.urlencoded({extended: false}))

app.route("/")
.get((req, res)=>{
    const userNames = users.map((user)=>user.first_name);
    res.json(userNames);
})
app.route("/post")
.post((req, res)=>{
    const body = req.body;
    users.push({...body, id: users.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err)=>{
        if(err) console.log("Error: ", err);
        else{
            return res.json({status: "Successful", id: users.length})
        }
    })
})

app.route("/:id")
.get((req, res)=>{
    const id =  Number(req.params.id)
    users.map((user)=>{
        if(id === user.id){
            res.json(user.first_name);
        } else return;
    });
})

app.route("/post/:id")
.delete((req, res)=>{
    const id = Number(req.params.id);
    const newUsers = users.filter((user)=>user.id !== id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsers), (err)=>{
        if(err)console.log("Error: ", err);
        else res.json({status: "Successful"})
    })
})

app.listen(PORT, ()=>{console.log("Port Running well")})