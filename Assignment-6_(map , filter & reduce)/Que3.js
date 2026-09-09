// 3. Extract User Names
// Create an array of user objects containing name and email. Use map() to create a new array containing
// only the names.

const arr = [
 { name: "Rahul", email: "rahul@example.com" },
 { name: "Priya", email: "priya@example.com" }
];

const names = arr.map((user) => user.name);
console.log(names);

// Output:
// ["Rahul", "Priya"]