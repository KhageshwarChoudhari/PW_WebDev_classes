// Section 5 - Mixed Problems
// Q24. ATM Transaction
// Create variables:
// balance
// withdrawAmount
// Check:
// 1. Withdrawal amount must be greater than 0.
// 2. Withdrawal amount must not be greater than the balance.
// 3. If valid, subtract the withdrawal amount.
// 4. Display the remaining balance.
// Example:
// Balance: ₹10000
// Withdraw: ₹3000
// Withdrawal successful
// Remaining balance: ₹7000

//solution-->


let balance = 10000
let withdrawAmonunt = 3000

if(withdrawAmonunt <= balance || withdrawAmonunt !== 0){
    let remainingBalance = balance - withdrawAmonunt 
    console.log("balance :",balance);
    console.log("Withdraw Amonunt :",withdrawAmonunt);
    console.log("Withdrawal successful");
    console.log("Remaining Balance :",remainingBalance);

}else{console.log("Enter a valid amount")}