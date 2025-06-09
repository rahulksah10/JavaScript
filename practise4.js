const prompt=require("prompt-sync")();4
// practice 4 

// q1 create a array no. & take input, add the input number into array
/*
let arr = [1, 2, 3, 4, 5, 6, 33]
let a =prompt("enter the number to add in array : ")
 a = Number.parseInt(a)
 arr.push(a)
 console.log(arr);
 */

/*
    // Q2 keep adding number in array untill number is 0 to be added 

 let arr2 = [1, 2, 4, 8, 9]
 let a
 do{
 a =prompt("enter the number to add in array : ")
 a = Number.parseInt(a)
 arr2.push(a)
} while( a != 0);
console.log(arr2);
*/

/*
//  Q3  Filter for number divisble by 10 from a given array


let arr3 = [10, 22, 3, 50, 770]

 let a = arr3.filter((x)=>
{
    return x%10 == 0
})
console.log(a);

*/

/*

// Q4  create a array of square of given number 

let arr4 = [2, 4, 6, 3, 5]

let a = arr4.map((x)=>
    {
return x*x
})
console.log(a);
*/



// use reduce to calculate factorial of a given number from array of first n natural numbers. 

let arr5 = [1, 2, 3, 4, 5]

let a = arr5.reduce((x1, x2)=>
    {
return x1 * x2
})
console.log(a);
