const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
  return x % 2;
}

// is Odd number only

const newarr = arr.filter(isOdd);
console.log(newarr);

// is even number only

const newarr2 = arr.filter((x) => {
  return x % 2 === 0;
});
console.log(newarr2);

// is greater than 2
const newarr3 = arr.filter((x) => x > 2);
console.log(newarr3);
