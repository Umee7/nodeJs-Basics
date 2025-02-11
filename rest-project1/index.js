const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs');
const { execPath } = require('process');
const app = express();
const PORT = 8005;

//Middleware - to add form data in body
app.use(express.urlencoded({extended: false}));

app.route("/api/users")
.get((req, res)=>{
    //Currently we are not doing anything related to user request, we just sending them response with the json of sample data
    return res.json(users);   
})
.post((req, res)=>{
    // we want to store data client sending in our json file, we can extract the data from client side with req.body. we using middleware to get body data.
    const body = req.body;
    console.log("body", body);
    const user = {
        id: body.id,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    }
    fs.writeFile("./MOCK_DATA.son", user, (req, data)=>{
     } )
    return res.json({status: "Pending"});
})
.patch((req, res)=>{
    // patch
    return res.json({status: "Pending"});
})
.delete((req, res)=>{
    // delete
    return res.json({status: "Pending"});
})

app.get("/users/:id", (req, res)=>{
    const id = Number(req.params.id)
    const html =  `
    <ul>
        ${users.map((user)=>{
            if(user.id === id){
                return `<li>${user.first_name}</li>`
            }
        }).join(' ')}
    </ul>`

    return res.send(html);
})


app.listen(PORT, ()=>{console.log("port is running")})