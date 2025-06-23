const prompt = require('prompt-sync')();
let age = prompt("Enter your age :")
 age = Number.parseInt(age)

 const findage = (age)=>{
      return age>=18?true:false
 }
  if (age<=0)
  {
    console.error("please enter valid age");
  }
 //with function
 if(findage(age))
 {
    console.log("yes you can ");
 }
 else{
    console.log("no, don't touch");
 }

 //without function
 if(age>=18){
    console.log("yes you can drive");
 }
 else{
    console.log("no you can't drive");
 }


//  practise question 4

let num = prompt("Enter a number")
num = Number.parseInt(num)

if (num>5){
    // location.href = "https://github.com/rahulksah10"  => this will work in browser only node.js doesn't  support
    console.log("Redirect to: https://github.com/rahulksah10");

}