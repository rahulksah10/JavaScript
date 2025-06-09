const prompt=require("prompt-sync")();

let marks = {
    rahul : 90,
    rohit : 80,
    abhi : 85,
    riya : 88
}

//problem 1
for( let i=0; i<Object.keys(marks).length; i++)
console.log( "The marks of " + Object.keys(marks)[i] + " are " + marks [Object.keys(marks)[i]]);

//problem 2 with for in loop (it will reduce the code)

for( let key in marks ){
    console.log( "the marks of " + key + " are " + marks[key]);
}


//problem 3 

let cn = 10
let i
while ( i != cn ) {
    console.log("try again");
 i = prompt("Enter the correct number : ");
}
console.log("- yes thank you -");


// problem 4

//  function mean(a, b, c, d, e)
//  {
//     return (a+b+c+d+e)/5;
//  }

//   console.log("enter numbers", mean(4, 5, 6, 6, 5));

  const mean = (a, b, c, d, e )=> {
    return (a+ b+ c+ d+ e)/5 ;
  }
  console.log(mean(4,5, 5, 6, 10));