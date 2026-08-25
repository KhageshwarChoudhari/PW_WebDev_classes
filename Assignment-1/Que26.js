// 26. Restaurant Menu
// Create the following menu:
// 1. Burger → ₹150
// 2. Pizza → ₹250
// 3. Pasta → ₹180
// 4. Sandwich → ₹120
// Take the customer’s choice and quantity.
// Use switch-case to calculate the total price.
// Example:
// Choice: 2
// Quantity: 3
// Total: ₹750

//solution-->

let Burger = 150;
let Pizza = 250;
let Pasta = 180;
let Sandwic = 120;
let choice = 2;
let quantity = 3;
switch (choice) {
  case 1:
    console.log("Total :", Burger * quantity);
  case 2:
    console.log("Total :", Pizza * quantity);
    break;
  case 3:
    console.log("Total :", Pasta * quantity);
    break;
  case 4:
    console.log("Total :", Sandwic * quantity);
    break;
}
