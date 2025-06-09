const prompt = require('prompt-sync')();

// function guessGame() {
//   const n = Math.floor(Math.random() * 10 + 1);
//   let num;
//   let galti = 1

//   console.log("Guess a number between 1 and 10");

//   do {
//     num = parseInt(prompt("Enter your guess: "));

//     if (num > n) {
//       console.log("Choose a lesser value");
//       galti++
//     } else if (num < n) {
//       console.log("Choose a greater value");
//       galti++
//     } else {
//       console.log("You guessed the number!",galti);
//     }
//   } while (num !== n);
// }

// guessGame();

console.log(oe(5));
console.log(oe(4));

function oe(num) {
       if(num % 2 == 0)
         return "Even"
  return "odd"
}

const oe1 = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(oe1(4));



