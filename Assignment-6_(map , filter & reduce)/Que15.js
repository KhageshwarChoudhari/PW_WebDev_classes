// Section 4 – reduce() and Accumulator Pattern
// 15. Calculate the Total Cart Price
// Question:
// Create an array of product prices and use reduce() to calculate the total price of all items in the cart.

const prices = [100, 200, 300, 400];
const totalPrice = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalPrice);

// output:
// 1000
