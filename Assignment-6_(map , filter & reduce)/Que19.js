
// 19. Create a Comma-Separated String
// Question:
// Create an array of frontend technologies and use reduce() to combine them into a single
// comma-separated string.
// Solution:
let technologies = ["HTML", "CSS", "JavaScript"];
let result = technologies.reduce(function(accumulator, technology) {
 return accumulator + " , " + technology;
});
console.log(result);
