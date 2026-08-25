// Challenge Questions
// Q29. Number Classification
// Take a number.
// Determine all applicable information:
// ● Whether it is positive, negative or zero
// ● Whether it is even or odd
// ● Whether it is greater than 100, less than 100, or equal to 100
// Example:
// Input: 150
// Output:
// Positive
// Even
// Greater than 100

//solution-->

let num = 150;
if (num >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
if (num > 100) {
  console.log("Greater than 100");
} else if (num < 100) {
  console.log("Less than 100");
} else {
  console.log("Equal to 100");
}
