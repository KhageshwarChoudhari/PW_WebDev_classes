// Q9. Largest of Three Numbers
// Take three numbers and find the largest number using if-else.
// Do not use arrays or any built-in maximum function.

//solution-->

let num1 = 45;
let num2 = 50;
let num3 = 3;
if(num1 >= num2 && num1 >= num3){
console.log( num1 , "is largest");
}else if(num2 >= num3 && num2 >= num1){
console.log( num2 , " is largest");
}else{
console.log( num3 , " is largest");
};