// Q18. Age Category
// Take a person’s age.
// Display:
// 0–12 → Child
// 13–19 → Teenager
// 20–59 → Adult
// 60+ → Senior Citizen
// Also handle invalid negative ages

//solution-->

let age = 60;
if (age >= 0) {
  if (age >= 60) {
    console.log("Senior Citizen");
  } else if (age >= 20) {
    console.log(" Adult");
  } else if (age >= 13) {
    console.log("Teenager");
  } else {
    console.log("Child");
  }
} else {
  console.log("Enter a valid ages");
}