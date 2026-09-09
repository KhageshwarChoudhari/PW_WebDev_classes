// Section 3 – filter()
// 10. Filter Available Products
// Question:
// Create an array of product objects containing name and inStock. Use filter() to create a new array
// containing only the products that are in stock.

const products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true },
];

const product_inStock = products.filter((product) => product.inStock === true);
console.log(product_inStock);