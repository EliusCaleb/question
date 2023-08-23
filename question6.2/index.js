// Let's say we have an array of first 45 numbers with one missing number. Need to find a missing integer from the list (JavaScript)

function findMissingNumber(arr) {
  const expectedSum = (45 * (45 + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}
// Example usage:
const numbersArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42,
  43, 44, 45,
];
const missingNumber = findMissingNumber(numbersArray);
console.log("The missing number is:", missingNumber);
