// 17. Combine Two Arrays Using Spread
// Create one array containing frontend technologies and another containing backend technologies. Use
// the spread operator to combine them into a single array.

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const combined = [...frontend, ...backend];

console.log(combined);

// Output:
// ["HTML", "CSS", "JavaScript", "Node.js", "Express"]