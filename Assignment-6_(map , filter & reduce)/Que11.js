// 11. Filter Users by Role
// Question:
// Create an array of user objects containing name and role. Use filter() to get all users whose role is
// "developer

const users = [
  { name: "Rahul", role: "developer" },
  { name: "Priya", role: "designer" },
  { name: "Amit", role: "developer" },
];

const developers = users.filter((user) => user.role === "developer");
console.log(developers);