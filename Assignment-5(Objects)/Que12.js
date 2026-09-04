// 12. Destructuring with Renaming
// Create a product object containing name and price. Use destructuring to store the name property in a
// variable named productName.

const product = {
  name: "Laptop",
  price: 50000
};
const { name: productName } = product;
// Expected Result:
// productName = Laptop
console.log(productName);