// 6. Add a New Property Using map()
// Question:
// Create an array of product objects containing name and price. Use map() to create a new array where
// each product also has an inStock property with the value true.
// Solution:

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
];
const updatedProducts =products.map((value) => ({ ...value, inStock: true }));

console.log(updatedProducts);