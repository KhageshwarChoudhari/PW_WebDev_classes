// Section 2 – Object Keys, Values and Entries
// 7. Get Object Keys
// Create a user object containing name, email, and role. Use Object.keys() to get all the property names.

 const user = {
  name: "Rahul",
  email: "rahul@example.com",
  role: "developer"
 };

console.log(Object.keys(user));

// Output:
// ["name", "email", "role"]