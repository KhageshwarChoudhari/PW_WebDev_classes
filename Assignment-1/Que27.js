// Q27. Electricity Bill + Discount
// Take the electricity units consumed.
// Calculate the bill using:
// 0–100 → ₹5/unit
// 101–200 → ₹7/unit
// Above 200 → ₹10/unit
// Then apply:
// Bill >= ₹2000 → 10% discount
// Otherwise → No discount
// Display:
// Units
// Original Bill
// Discount
// Final Bill

//solution-->

let units = 300;
console.log("Units :",units);
if (units <= 100) {
  console.log(`Total bill is : ${units*5}`);
}else if (units > 100 && units <= 200){
    console.log(`Total bill is : ${(100*5)+((units - 100)*7)}`); 
}else{
    let bill = (100*5)+( 100*7)+((units-200)*10)
    console.log("Original bill :" , bill);
    if(bill >= 2000){
        let discount = bill * 0.9  
        console.log("Discount : ",( bill * 10 )/100);
        console.log("Final bill :", discount);
    }else{
        console.log("no discount");
    }
}