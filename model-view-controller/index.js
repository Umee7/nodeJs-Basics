const express = require('express');
const app = express();
const PORT = 9000;

const { connectMongoDB } = require('./connection.js')
const userRouter = require('./routes/user.js')


connectMongoDB("mongodb://127.0.0.1:27017/mvc")
.then(()=>console.log("mongoDB connected..."))
.catch((err)=>{
    console.log("Error: ", err)
})

app.use(express.urlencoded({extended: false}))

app.use("/users", userRouter)

app.listen(PORT, ()=>{console.log(`port ${PORT} running...`)})