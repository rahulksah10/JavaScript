// string question

// q1

let Name = "Rahul"
console.log(Name.includes(Name));
console.log(Name.startsWith("mr"));
console.log(Name.endsWith("sah"));


//q4  print only number
let rs = "please give Rs 10000 "
console.log(rs.slice(15));
console.log(typeof rs);
let amt = Number.parseInt(rs.slice(15));
console.log(amt);
console.log(typeof amt);

// q5 change the given string of 4th character

let girl = "priyanka"
girl[3] = "w"
console.log(girl); // can't change bcz string is immutable but we can create same  string that  replce with replce method of a 4th character of string.