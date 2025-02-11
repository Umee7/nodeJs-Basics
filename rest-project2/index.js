const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const app = express();
const PORT = 9000;

app.use(express.urlencoded({extended: false}))

app.route("/")
.get((req, res)=>res.json(users))
.post((req, res)=>{
    // adding new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        return res.json({status: "success", id: users.length })
    });
})


app.route("/:id")
.patch((req, res)=>{
    //updating user details
    const body = req.body;
    const id = Number(req.params.id)
    newUser = users.map((user)=>{
        if(user.id === id){
            return {...user, ...body};
        }
        return user;
    })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUser), (err, data)=>{
        return res.json({status: "details updated"});
    })
})
.delete((req, res)=>{
    //deleting user
    const body = req.body;
    const id = Number(req.params.id);
    const newUser = users.filter(user => user.id !== id)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUser), (err, data)=>{
        if(err){
            console.log("Error: ", err);
        }else{
            return res.json({status: "User Deleted Successfully!!"})
        }
    })
})

app.get("/:id", (req, res)=>{
    //reading data
    const id = Number(req.params.id)
    users.map((user)=>{
        if(user.id === id) return res.json(user);
    })
})

app.listen(PORT, ()=>{console.log(`port ${PORT} is running!!`)})