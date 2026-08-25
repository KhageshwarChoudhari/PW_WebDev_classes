// 19. Sum from 1 to N
// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n.
// Example:
// Input: 5
// Output: 15

let sumOf = (num) => {
  let sum = 0 ;
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum ;
};

console.log(sumOf(6));
