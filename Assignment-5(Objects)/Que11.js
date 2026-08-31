// Section 3 – Destructuring and Shorthand Properties
// 11. Object Destructuring
// Create a user object containing name, email, and role. Use object destructuring to extract name and
// email into separate variables.

const user = {
  name: "Rahul",
  email: "rahul@example.com",
  role: "developer",
};

const { name, email, role } = user;
console.log(name);
console.log(email);
console.log(role);

// Output:
// Rahul
// rahul@example.com
