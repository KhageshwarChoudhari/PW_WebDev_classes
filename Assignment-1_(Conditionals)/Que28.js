// Q28. Simple ATM Menu
// Create the following menu:
// 1. Check Balance
// 2. Deposit Money
// 3. Withdraw Money
// 4. Exit
// Use switch-case.
// Rules:
// ● Check Balance → Display current balance
// ● Deposit → Add money to balance
// ● Withdraw → Check whether sufficient balance exists
// ● Exit → Display a goodbye message
// ● Invalid choice → Display an error message

//solution-->

let Case = "Deposit Money";
let balance = 30000;
let deposit_mone = 500;
let Withdraw_Money = 500;
switch (Case) {
  case "Check Balance":
    console.log("Balance is ", balance);
  case "Deposit Money":
    balance + deposit_mone;
    console.log("Deposit sucessfull");
    break;
  case "Withdraw Money":
    balance - Withdraw_Money
    console.log("Withdraw sucessfull");
    break;
  case "Exit":
    console.log("Thankyou");
    break;
}
