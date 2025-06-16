const prompt = require('prompt-sync')();

const add = ((x, y) =>
    {
        return x + y   
    })
    

    
    let a =parseInt(prompt("Enter first number"))
    let b =parseInt(prompt("Enter second number"))
    console.log(add(a,b));