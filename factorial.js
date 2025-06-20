const prompt = require('prompt-sync')();

function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers.";
    if (n === 0 || n === 1) return 1;

    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}


let input = prompt("Enter a number to calculate its factorial: ");
let number = parseInt(input);

if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    console.log(`Factorial of ${number} is: ${factorial(number)}`);
}
