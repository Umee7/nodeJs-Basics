const http = require('http');
const fs = require('fs');

//created the http server

const myServer = http.createServer((req, res)=>{
    //this log is just the content we are going to append in logtxt file
    const log = `${Date.now()} New Request`;
    //notice how the below function is non blocking, so we dont make users wait
    fs.appendFile('./log.txt', log, (err, data)=>{
        res.end("This is the response you been waiting for LOL");
    })
})


//Basically the port we want this server to run and the content we wanna show
myServer.listen(8000, ()=> console.log("Server created successfully"));