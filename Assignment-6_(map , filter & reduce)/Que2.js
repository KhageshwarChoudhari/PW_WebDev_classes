// 2. Add a Currency Symbol to Prices
// Create an array of product prices and use map() to create a new array where each price is displayed with
// a ₹ symbol.

const price = [100, 250, 500];

const priceWithCurrency = price.map((p) => `₹${p}`);
console.log(priceWithCurrency);


// Output:
// ["₹100", "₹250", "₹500"]
