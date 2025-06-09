let num = [3, 5, 1, 2, 4]

// for(i=0; i<num.length; i++)
// {
//     console.log(num[i]);
// }

             
               //ForEach loop ( it will take values index & array )

// num.forEach((element) =>
// {
//     console.log(element*element);
// })

                //Array.from 
// let name = "rahul"
// console.log(typeof name);

// let arr = Array.from(name)  // array.from is used to change array from string

// console.log(arr);
// console.log(typeof arr);



                 // for ..of 
                 

     for( let i of num)
     {
        console.log(i);
     }

                  // for .. in 

                
     for( let i in num)    // it is gives the key of array
     {
        console.log(i);
        // console.log(num[i]); it will show key and values both in array
     }       