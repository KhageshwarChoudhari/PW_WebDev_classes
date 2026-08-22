// Q14. Student Result
// Take marks of three subjects.
// A student passes only when they score 40 or more in every subject.
// If the student passes, calculate the average and display:
// Average >= 75 → Distinction
// Average >= 60 → First Division
// Average >= 50 → Second Division
// Otherwise → Pass
// If any subject is below 40:
// Result: Fail

//solution-->

let sub1 = 40;
let sub2 = 70;
let sub3 = 70;
if (sub1 >= 40 && sub2 >= 40 && sub3 >= 40) {
  let average = (sub1 + sub2 + sub3) / 3;
  if (average >= 70) {
    console.log(" Pass with : Distinction");
  } else if (average >= 60) {
    console.log(" Pass in : First Division");
  } else if (average >= 50) {
    console.log("Pass in : Second Division");
  } else {
    console.log("Result: Pass");
  }
} else {
  console.log("Result: Fail");
}
