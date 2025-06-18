/* Use filter() to keep only the even numbers.

Use map() to double each of the filtered numbers.

Use reduce() to find the sum of the mapped values.*/
const prompt = require('prompt-sync')();

const n = parseInt(prompt("How many numbers do you want to enter? "));

let numbers = [];
for (let i = 0; i < n; i++) {
  const num = parseInt(prompt(`Enter number ${i + 1}: `));
  numbers.push(num);
}

const result = numbers
  .filter(num => num % 2 === 0) 
  .map(num => num * 2)           
  .reduce((acc, curr) => acc + curr, 0); 

console.log(result); 
