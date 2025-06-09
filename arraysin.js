// intro of aaray, data type of array is OBJECT

let class_marks = [85, 47, 88, 99,  "not present", true ]
console.log(class_marks);
class_marks[6] = 33 // adding element in array sepretally 
console.log(class_marks[3]);
console.log(class_marks[4]);
console.log(class_marks[5]);
console.log(class_marks[6]);
class_marks[0] = 95; //chaging the marks in element
console.log(class_marks); // after changing the array
console.log(typeof class_marks);

let b = class_marks.toString()
console.log(b);
let n = class_marks.length;
for( i=0;i<n; i++)
{
    console.log(n[i]);
}