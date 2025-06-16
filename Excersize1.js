const prompt = require('prompt-sync')();

function guessGame() {
  const n = Math.floor(Math.random() * 100 + 1);
  let num;
  let chance_taken = 1

  console.log("Guess a number between 1 and 100");

  do {
    num = parseInt(prompt("Enter your guess: "));

    if (num > n) {
      console.log("Choose a lesser value");
      chance_taken++
    } else if (num < n) {
      console.log("Choose a greater value");
      chance_taken++
    } else {
      console.log("You guessed the number in ",chance_taken + " chances");
    }
  } while (num !== n);
}

guessGame();





