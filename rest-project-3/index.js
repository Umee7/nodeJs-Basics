const express = require('express')
const app = express();
const PORT = 7000;

app.use(express.urlencoded({extended: false}))

app.route("/")
.get((req, res)=>{
    return res.json({status: "working!"});
})
app.route("/post")
.post((req, res)=>{
    const body = req.body;
    console.log(body);
    return res.json({status: "working"})
})
app.listen(PORT, ()=>{console.log("Port Running well")})