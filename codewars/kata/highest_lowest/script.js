function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }
  let sortedArray = array.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 1; i < sortedArray.length - 1; i++) {
    sum += sortedArray[i];
  }
  return sum;
}

console.log(sumArray([6, 2, 1, 8, 10])); // Output: 16
console.log(sumArray([1, 1, 11, 2, 3])); // Output: 6
console.log(sumArray(null)); // Output: 0
console.log(sumArray([])); // Output: 0
console.log(sumArray([1])); // Output: 0

// ! Alternative function
const sumArray2 = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;

console.log(sumArray2([6, 2, 1, 8, 10])); // Output: 16
console.log(sumArray2([1, 1, 11, 2, 3])); // Output: 6
console.log(sumArray2(null)); // Output: 0
console.log(sumArray2([])); // Output: 0
console.log(sumArray2([1])); // Output: 0
