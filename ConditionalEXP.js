const prompt=require("prompt-sync")();
let a =prompt("What is your age :");
let c = parseInt(a);
console.log(a); 
if(a>0) //if the condition is true then it will work otherwise it can't even run
{
    console.log("This is valid age");
}
else 
{
    console.log("this is invalid age");
}

let b=prompt("What is you cibil score :");
let d = parseInt(a);
console.log(b);
if(b<600)
{
    console.log("your cibil score is very low better luck next time");
}
else if(b<700)
{
   console.log("Allowed for limited amount");
}
else if(b<750)
{
    console.log("maximum limit is 100k");
}
else("Enter valid cibil score");