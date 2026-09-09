// 12. Filter Expensive Products
// Question:
// Create an array of product objects containing name and price. Use filter() to get products with a price
// greater than 1000.

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];

const expensiveProducts = products.filter((product) => product.price > 1000);
console.log(expensiveProducts);