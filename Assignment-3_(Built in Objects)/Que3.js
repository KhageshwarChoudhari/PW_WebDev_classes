// 3. Round a Number
// Use Math.round() to round the number 4.6 to the nearest integer.
// Example:
// Input: 4.6
// Output: 5

//solution-->

let num = Math.random() * 10 ;
console.log("Number with decimal",num);
console.log("Number with rounded value",Math.round(num));

// when the decimal number (0.371932930408823) are < 0.5 then the num converted to lower nearest integer (0)
// when the decimal number (1.791932930408823) are > 0.5 then the num converted to upper nerest integer (2)