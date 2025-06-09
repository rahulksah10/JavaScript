const prompt=require("prompt-sync")();
// let fact = 1
// let n =prompt("Enter the number : ");
// n=Number.parseInt(n);
// for ( let i = 0; i < n; i++)
// {
//     sum +=(i+1)
// }
// console.log("Sum of first " + n + " natural number is : " + sum);


//factorial  of  number
/*for ( let i = 2; i <= n; i++)
{
    fact *=(i)
}
console.log("factorial of given number is : " + fact);
*/



//for in loop

let obj ={
    rahul : 95,
    ram : 65,
    hul : 75
} 
for ( let a in obj)
{
console.log( "Marks of " + a  + " are " + obj[a]);
}


//for of loop 
for ( let b of "rahul") //it is used for now string
{
    console.log(b);
}
