// Q30. Student Result System
// Create variables for:
// studentName
// rollNumber
// mathMarks
// scienceMarks
// englishMarks
// Calculate:
// ● Total marks
// ● Percentage
// ● Grade
// ● Pass/Fail
// Rules:
// Pass/Fail
// The student must score at least 40 in every subject.
// Grade
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// 40–59 → E
// Below 40 → F
// Display a result like:
// -------------------
// STUDENT RESULT
// -------------------
// Name : Rahul
// Roll No : 101
// Math : 85
// Science : 78
// English : 92
// Total : 255
// Percentage : 85%
// Grade : B
// Result : PASS
// -------------------

// solution-->

let studentName = "Khageshwar ";
let rollNumber = 101;
let mathMarks = 85;
let scienceMarks = 78;
let englishMarks = 92;
let totalMarks = mathMarks + scienceMarks + englishMarks;
let percentage = (totalMarks / 300) * 100;
let grade = " ";
let result = " ";

if (mathMarks > 40 && scienceMarks > 40 && englishMarks > 40) {
  result = "Pass";
} else {
  result = "Fail";
}
if (percentage <= 100 && percentage >= 90) {
  grade = "A";
} else if (percentage < 90 && percentage >= 80) {
  grade = "B";
} else if (percentage < 80 && percentage >= 70) {
  grade = "C";
} else if (percentage < 70 && percentage >= 60) {
  grade = "D";
} else if (percentage < 60 && percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}

console.log(
  `
----------------------------
       STUDENT RESULT
----------------------------
  Name       : ${studentName}
  Roll No    : ${rollNumber}
  Math       : ${mathMarks}
  Science    : ${scienceMarks}
  English    : ${englishMarks}
  Total      : ${totalMarks}
  Percentage : ${percentage}
  Grade      : ${grade}
  Result     : ${result}
----------------------------
    `,
);
