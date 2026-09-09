
// 20. Calculate Final Cart Total
// Question:
// Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final
// cart total by multiplying the price and quantity of each item.
// Solution:
let cart = [
 { name: "Mouse", price: 500, quantity: 2 },
 { name: "Keyboard", price: 1000, quantity: 1 }
];
let total = cart.reduce(function(accumulator, item) {
 return accumulator + (item.price * item.quantity);
}, 0);
console.log(total);
