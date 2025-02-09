// const os = require('os');
// console.log(os.cpus().length);
// for my laptop it is 16

const fs = require('fs');

//BLOCKING
// console.log("1");
// const result = fs.readFileSync("./firstFile", "utf-8");
// console.log(result);
// console.log("2");

//output : 1 (firstFile content) 2 => this is blocking 


//NON-BLOCKING
console.log("1");
fs.readFile("./firstFile", "utf-8", (err, result)=>{
    if(err){
        console.log("Error:", err)
    } else{
        console.log(result);
    }
})
console.log("2");
console.log("3");

//output: 1 2 3 (firstFile content) => This is non-blocking