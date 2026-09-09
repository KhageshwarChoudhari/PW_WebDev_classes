// Section 1 – map() and Immutability
// 1. Convert Product Names to Uppercase
// Create an array of product names and use map() to create a new array where every product name is
// converted to uppercase.
//
const productNames = ["laptop", "mobile", "headphones"];
console.log(productNames.map(name => name.toUpperCase()));

// Output:
// ["LAPTOP", "MOBILE", "HEADPHONES"]