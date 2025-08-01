const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}
function triple(y) {
  return y * 3;
}

function binary(z) {
  return z * toString(2);
}

const newarr = arr.map(function double(x) {
  return x * 2;
});
console.log(newarr);

const newarr2 = arr.map((y) =>{
  return y * 3;
});
console.log(newarr2);


const newarr3 = arr.map((x)=>{
    return x*x;
});
console.log(newarr3);

const newarr4 = arr.map((s) =>
   s.toString(2)
);

console.log(newarr4);
