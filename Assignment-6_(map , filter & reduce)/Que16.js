// 16. Count Total Products
// Question:
// Create an array of product names and use reduce() with an accumulator to count the total number of
// products.

let products = ["Laptop", "Mouse", "Keyboard"];
let count = products.reduce(function(accumulator) {
 return accumulator + 1;
}, 0);
console.log(count);

