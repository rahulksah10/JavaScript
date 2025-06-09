//Array methods in js

let arr = [20, 30, 40, 33, 11]

// let b = arr.toString() //b is string now
// console.log(b);
// let c = arr.join("_")
// console.log(c);
// console.log(typeof c); 

// arr.pop(); //popout the last element
// console.log(arr); 

// let r = arr.push(50);// add element in the last
// console.log( arr, r);

// let r = arr.shift();// remove the first element in the array
// console.log(arr, r);

// let r = arr.unshift(74);// add the first element in the array
// console.log(arr, r); 

// console.log(arr.length);
// delete arr[0]
// console.log(arr);
// console.log(arr.length); // after deleting the array element , element length didn't even change

let arr_mm = [17, 3, 88, 77, 4]

// let newarr = arr.concat(arr_mm) // adding two array together
// console.log(newarr);

// arr_mm.sort(); // works as alphabetical sorting like first leter of  element such as 14 , 15 ,2 --- i will sort like same bcz checking first letter 1 not checking 15
// console.log(arr_mm);

let l =[14, 1500, 2, 7, 3, 2100]
// console.log(l.sort());

// sorting a element in assending and dessending order 

    // firstly we have to make function to implemnet in sorting for assending & dessending

    // let compare = (a, b)=>
    // {
    //     // return a - b; for assending order 
    //     return b - a; // for dessending order
    // }
    // let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
    // num.sort(compare)
    // console.log(num);

                             // reverse function

    // l.reverse()
    // console.log(l);

                             // splice 

    /* let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]

     num.splice(2, 3, 1001, 1002, 1003, 1004)  // splice syntax is -- splice(index number, how many element want to delete, adding elments as your wishes)
    //  let deletedValues = num.splice(2, 3, 1001, 1002, 1003, 1004)  //finding the deleted values
    //  console.log(deletedValues);
     console.log(num); */

                          // slice methode


    let num = [22, 3, 14, 5, 6, 7, 8]
    //  let new_num = num.slice(2); // create a new araay to store slice array
     let new_num = num.slice(2, 5); // write starting index (that will print) to required index/ last index(that will not print)
     
    console.log(new_num);




     