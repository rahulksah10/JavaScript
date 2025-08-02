const users = [
  { firstname: "rahul", lastname: "sah", age: "23" },
  { firstname: "abhi", lastname: "singh", age: "22" },
  { firstname: "rohit", lastname: "singh", age: "22" },
  { firstname: "rishu", lastname: "ritik", age: "21" },
];

// list of full names

// const all = users.map((x)=> x.firstname + "" + x.lastname)
// console.log(all);

// const age = users.reduce(function(acc, curr){
//     if (acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})
// console.log(age);

const output = users.filter((x) => x.age < 23).map((x)=> x.firstname);
console.log(output);
