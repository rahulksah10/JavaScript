// Add groupBy as an extension method to Array prototype
Array.prototype.groupBy = function (keySelector) {
  // Handle null or undefined array
  if (!this || !Array.isArray(this) || this.length === 0) {
    return {};
  }

  const result = {};

  for (const item of this) {
    // Use null key if item is null or undefined
    const key = item == null ? "null" : keySelector(item);

    // Initialize group if it doesn't exist
    if (!result.hasOwnProperty(key)) {
      result[key] = [];
    }

    // Push the current item into its group
    result[key].push(item);
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Grouping by even and odd
const groupsByEvenOdd = numbers.groupBy(x => x % 2 === 0 ? 'Even' : 'Odd');
console.log(groupsByEvenOdd); // { Even: [2,4,6,8], Odd: [1,3,5,7,9] }

// Grouping by first digit
const groupsByFirstDigit = numbers.groupBy(x => String(x)[0]);
console.log(groupsByFirstDigit); // { "1": [1], "2": [2], ..., "9": [9] }
