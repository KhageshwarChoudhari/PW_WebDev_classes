// Q25. Movie Ticket System
// Take:
// age
// numberOfTickets
// Ticket prices:
// Age below 12 → ₹100
// Age 12–59 → ₹200
// Age 60+ → ₹120
// Calculate the total ticket price.
// Example:
// Age: 25
// Tickets: 3
// Total: ₹600

//solution-->

let age = 25
let numberOfTickets = 3

if(age < 12){
    let totalPrice = numberOfTickets * 100 
    console.log("Total :", totalPrice)
}else if(age >= 12 && age < 60){
    let totalPrice = numberOfTickets * 200 
    console.log("Total :", totalPrice)
}else if(age >= 60){
    let totalPrice = numberOfTickets * 120 
    console.log("Total :", totalPrice)
}else{console.log("Enter a valid age")}

