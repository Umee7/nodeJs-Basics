const express = require('express');
const app = express();
const PORT = 6000;

const { connectMongoDB } = require('./connection');
const Router = require('./routes/user');


connectMongoDB("mongodb://127.0.0.1:27017/url-app")
.then(() => { console.log("mongoDB connected...")})
.catch((err) => { console.log("Error: ", err)})

//middleware to get body
app.use(express.json());

app.use("/url", Router );


app.listen(PORT, () => { console.log(`Port ${PORT} is running...`)});
