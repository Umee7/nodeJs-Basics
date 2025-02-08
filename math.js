function add(a, b){
    return a + b;
}

function sub(a, b) {
    return a - b;
}

//Method 1 to export 
module.exports = {
    add, sub
}

//Since we have multiple functions to export, we exported as Object.

