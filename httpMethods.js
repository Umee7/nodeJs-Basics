// const fs = require('fs');
// const http = require('http');

// const myServer = http.createServer((req, res)=>{
//     //basically my request method here is GET by default, if i add data it can be POST, PUT, PATCH, DELETE 
//     const log = `hello ${req.method} ${req.url}`
//     fs.appendFile('./log.txt', log, (err, data)=>{
//         if(err){
//             console.log("Error: ", err);
//         } else res.end("Done");
//     })
// })

// myServer.listen(8001, ()=>console.log("Port working well"));