// Section 4 – Spread and Rest
// 15. Copy an Object Using Spread
// Create a user object and use the spread operator to create a copy of it.

const user = {
  name: "Rahul",
  role: "developer",
};

// Copy the object using the spread operator
const newUser = { ...user };
console.log(newUser);

// Expected Result:
// const newUser = {
//  name: "Rahul",
//  role: "developer"
// };
