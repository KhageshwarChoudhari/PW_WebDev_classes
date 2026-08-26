// 9. Split a String
// Create a string "HTML,CSS,JavaScript" and use split() to separate the values.
// Example:
// Input: "HTML,CSS,JavaScript"
// Output: ["HTML", "CSS", "JavaScript"]

//solution-->

let string = "HTML,CSS,JavaScript"
let output = [string.slice(0,4),string.slice(5,8),string.slice(9,21)]
console.log(output);