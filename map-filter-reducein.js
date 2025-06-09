           // array map methods (it will make new array)
        //    (it return array)
           // in map we have three things such as -- values , index, array

    /*       
let n= [23, 33, 67]
// console.log(n);
 let a= n.map((values, index, array)=> //using all three
{
   console.log(values, index, array); //calling all three 
//    return values + 3 // it will add given number
   return values + index // it will add index of element
})
console.log(a); // here it return a new array with + 3 operations
*/

/*
           // array filter methods (it return array)

let n2 = [45, 23, 0, 3, 5]
console.log(n2);
let a2 = n2.filter((values)=>
{
      return values <10 
})
    console.log(a2); //  
    console.log(n2); // original array is not chnging
    */



                  // array reduce methods (it return a value)
                  // work as perform first two element after resultent value will be perform into next element so on...

let n3 = [1, 2, 3, 4, 5, 2, 1]

const reduce_fun = (value1, value2)=> {     //making seprate function
    return value1 + value2
}
let a3 = n3.reduce(reduce_fun)
/* let a3 = n3.reduce((values1, values2)=>
{
    return values1 + values2    // making function inside the methods
}) */
console.log(a3);