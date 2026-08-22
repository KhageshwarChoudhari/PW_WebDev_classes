// Q4. Shopping Bill
// Create variables for:
// ● Product price
// ● Quantity
// Calculate the total bill.
// Then apply a discount of 10% and display:
// ● Original bill
// ● Discount amount
// ● Final bil

//solution-->

let productPrice = 299;
let quantity = 2 ;

let originalbill = productPrice * quantity;
console.log("Original bill :" , originalbill);

let discount =  originalbill / 10 ;
console.log("Discount amount" , discount);

let finalbill = originalbill-discount ;
console.log("Final bill :", finalbill);