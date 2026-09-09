// 9. Format User Names Using map()
// Question:
// Create an array of names and use map() to add the text "User: " before every name. Display the new
// array

const names = ["Rahul", "Priya", "Aman"];
const FN = names.map((name) => `User ${name}`);
console.log(FN);