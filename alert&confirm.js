const prompt = require('prompt-sync')();

console.log("This is like an alert!");

let confirmInput = prompt("Do you want to continue? (yes/no): ");
if (confirmInput.toLowerCase() === "yes") {
    console.log("User confirmed");
} else {
    console.log("User cancelled");
}