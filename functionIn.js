function oneplusavg(x ,y) {
    return Math.round(1 + (x ,y) /2)
    console.log("done");
}

const hello = ()=>{
    console.log("hey how are you buddy");
    return "hii";
}
const sum =(r,s)=>{       // Arrow function
    return r + s;

}

let v = hello();
console.log(v);

console.log("Sum with arrow function ", sum(5,6));
let a = 1;
let b = 2;
let c = 3;
console.log(" One plus average of  a and b ", oneplusavg(a,b));
console.log(" One plus average of  a and b ", oneplusavg(b,c));
console.log(" One plus average of  a and b ", oneplusavg(a,c));