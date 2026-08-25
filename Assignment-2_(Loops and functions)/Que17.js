// Section 3 - Functions with Loops
// 17. Print Numbers Using a Function
// Create a function printNumbers(n) that prints numbers from 1 to n using a loop.
// Example:
// Input: 5
// Output: 1 2 3 4 5
function printNumbers(n){
    for (let i = 1 ; i <= n ; i++ ){
       console.log(i);
    }
    return "";
}

console.log(printNumbers(5));