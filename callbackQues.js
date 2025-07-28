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


// 🔹 Write a custom forEach function using callbacks


function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

myForEach([10, 20, 30], function(value, index) {
  console.log(index + ": " + value);
});


// Convert a callback-based function into arrow function


const greet = (name, callback) => {
  console.log("Hi " + name);
  callback();
};

greet("Rahul", () => {
  console.log("Callback function is called.");
});

