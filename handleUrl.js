const http = require('http');
const fs = require('fs');
//this is not built-in, to install run command npm install url
const url = require('url');
//As usual we took modules from http, fs which are built in for nodeJS

const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()} ${req.url}This is the request\n`;
    fs.appendFile("./log.txt", log, (err, data)=>{
        //req.url is the url that is requesting the response, we writing conditions for it
        //.parse() is a function that identifies query parameters, and true is for it to return query object
        const URL = url.parse(req.url, true);
        console.log(URL);
        switch(URL.pathname){
            case '/':
                res.end("You are in home page");
                break;
            case '/about':
                res.end("You are in the about page");
                break;
            case '/contact':
                res.end("you are in the contact page");
                break;
            default:
                res.end("404 Not Found");
        }
    })
})

myServer.listen(8000, ()=> console.log("Here you go"));