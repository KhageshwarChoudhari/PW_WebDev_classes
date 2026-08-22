// 17. Salary Bonus
// Take an employee’s:
// ● Salary
// ● Years of experience
// Bonus rules:
// Experience >= 10 years → 20% bonus
// Experience >= 5 years → 10% bonus
// Experience >= 2 years → 5% bonus
// Below 2 years → No bonus
// Calculate and display:
// ● Original salary
// ● Bonus
// ● Final salary

//solution-->

let salary = 20000;
let yrOfExp = 2;
if(yrOfExp >= 10){
    console.log(`
Orignal salary : ${salary}
Bonus          : ${(20/100)*20000}
Final salary   : ${salary + (20/100)*20000 } `);
}else if (yrOfExp >= 5 && yrOfExp < 10){
    console.log(`
Orignal salary : ${salary}
Bonus          : ${(10/100)*20000}
Final salary   : ${salary + (10/100)*20000 } `);

}else if (yrOfExp >= 2 && yrOfExp < 5){
    console.log(`
Orignal salary : ${salary}
Bonus          : ${(5/100)*20000}
Final salary   : ${salary + (5/100)*20000 } `);

}else{
    console.log(`
Orignal salary : ${salary}
Bonus          : No bonus
Final salary   : ${salary} `);
}