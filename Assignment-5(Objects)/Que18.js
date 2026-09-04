// 18. Rest Parameters
// Create a function named showSkills that accepts a developer's name as the first parameter and any
// number of skills using a rest parameter. Display the name and skills.

function showSkills(name, ...skills) {
  return `Name: ${name}\nSkills: ${skills}`;
}
console.log(showSkills("Rahul", "HTML", "CSS", "JavaScript"));

// Output:
// Name: Rahul
// Skills: HTML,CSS,JavaScript
