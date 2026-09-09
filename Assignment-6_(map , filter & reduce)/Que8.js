// 8. Create a New Array Using map()
// Question:
// Using the same array of frontend technologies, use map() to create a new array where every
// technology is converted to uppercase.
const technologies = ["HTML", "CSS", "JavaScript", "React"];
const UC = technologies.map((tech) => tech.toUpperCase());

console.log(UC);
