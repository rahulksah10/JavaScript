const arr = [5, 3, 4, 6, 8, 1];
// find sum

function findsum(arr) {
  let x = 0;
  for (i = 0; i < arr.length; i++) {
    x = x + arr[i];
  }
  return x;
}
console.log(findsum(arr));

//find max
function findMax(arr) {
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const arr2 = [15, 3, 1, 5, 8, 6];

//find sum with reduce()
const filt = arr2.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
});
console.log(filt);

// find max with reduce
const filt2 = arr2.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(filt2);
