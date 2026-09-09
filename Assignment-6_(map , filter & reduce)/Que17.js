// 17. Calculate the Total Quantity
// Question:
// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total
// quantity of all items.
// Solution:
let cart = [
 { name: "Laptop", quantity: 1 },
 { name: "Mouse", quantity: 2 }
];
let totalQuantity = cart.reduce(function(accumulator, item) {
 return accumulator + item.quantity;
}, 0);
console.log(totalQuantity);
