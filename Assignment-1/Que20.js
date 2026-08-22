// 20. Simple Calculator
// Take:
// ● First number
// ● Second number
// ● Operator
// Supported operators:
// +
// -
// *
// /
// %
// Use switch-case.
// Example:
// First number: 20
// Second number: 5
// Operator: *
// Output: 100
// Also handle division by zero.

//solution-->

let FirstNumber = 20 ;
let SecondNumber = 3 ;
let Operator = "/"

switch(Operator){
    case("+"): 
        console.log(FirstNumber + SecondNumber);
        break;
        case("-"): 
        console.log(FirstNumber - SecondNumber);
        break;
        case("*"): 
        console.log(FirstNumber * SecondNumber);
        break;
}
if(FirstNumber !== 0 && SecondNumber !== 0){
    switch(Operator){
        case("/"): 
       console.log(FirstNumber / SecondNumber);
        break;
        case("%"): 
        console.log(FirstNumber % SecondNumber);
    }
}else{
    console.log("invalid number ");
}