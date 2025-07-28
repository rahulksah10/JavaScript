//🔹Write a function that takes two numbers and a callback to return their sum.

function add(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

add(5, 3, function(result) {
  console.log("The sum is: " + result);  // Output: The sum is: 8
});



// 🔹Callback example using setTimeout


function delayedMessage(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
}

delayedMessage("Hello after 2 seconds", 2000, function() {
  console.log("Callback executed.");
});
