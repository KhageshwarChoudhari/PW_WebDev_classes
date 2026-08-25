// Q2. Swap Two Numbers
// Create two variables:
// a = 10
// b = 20
// Swap their values using a third variable.
// Expected output:
// Before swapping:
// a = 10
// b = 20
// After swapping:
// a = 20
// b = 10

//solution-->

var var1 = 20 ;
var var2 = 30 ;

// Declearing another variable for swaping values 
var var3 ;

//Before swapping
console.log("Before swapping");
console.log("Variable 1 :",var1);
console.log("Variable 2 :",var2);

//After swapping
console.log("After swapping");
var var3 = var2 ;
console.log("Variable 1 :",var3);
var var2 = var1 ;
console.log("Variable 2 :",var2);
