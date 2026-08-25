// Q22. Menu-Based Calculator
// Create this menu:
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Modulus
// Take the user’s choice and two numbers.
// Use switch-case to perform the selected operation.

//solution-->

let num1 = 10 ;
let num2 = 30 ;

let operation = 4;

switch (operation) {
    case(1):
    console.log("Addition :" , num1 + num2);
    break;
    case(2):
    console.log("Subtraction :" , num1 - num2);
    break;
    case(3):
    console.log("Multiplication :" , num1 * num2);
    break;
    case(4):
    if(num2 == 0){
        console.log(" Division not possible");
    }else{
         console.log("Division :" , num1 / num2);
    }
    break;
    case(5):
    console.log("Modulus :" , num1 % num2);
    break;

}