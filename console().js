// cconsole function in javascript

console.log("hii, i am rahul")	
//Outputs a general message.

console.error("this is error")	
// Outputs an error message (usually in red).

console.warn("please don't use clear, it will cleared all the output")	
// Outputs a warning message (usually in yellow).

console.info("this is impo info")	
// Outputs informational messages (similar to log).

console.debug()	
// Outputs debug-level messages (may be hidden in default view).

Obj = {a: 1, b: 2, c : 3}

console.table(Obj)	
// Displays tabular data as a table (good for arrays/objects).

console.group()	
// Starts a new inline group in the console.

console.groupEnd()
// Ends the most recently started group.

console.time("a")	
// Starts a timer with a label.
//
console.timeEnd("a")	
// Ends the timer and prints the elapsed time.



console.assert(5>36)	
console.assert(544>36)	
// Logs a message only if the assertion is false.

console.count()	
// Logs the number of times that count has been called.

// console.clear()	
// Clears the console.