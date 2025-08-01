const arr = [5, 3, 4, 6, 8, 1];
// sum

function findsum(arr) {
  let x = 0;
  for (i = 0; i < arr.length; i++) {
    x = x + arr[i];
  }
  return x;
}
 console.log(findsum(arr));

const arr2 = [15, 3, 1, 5, 8, 6];
const filt = arr2.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
});
console.log(filt);
