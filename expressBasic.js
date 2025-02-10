const express = require('express');
const app = express();
const port = 8000

app.get("/", (req, res)=>{
    return res.send(`Hello ${req.query.name}, you are ${req.query.age}`);
});

app.listen(port, ()=>{console.log("Port running!!")})