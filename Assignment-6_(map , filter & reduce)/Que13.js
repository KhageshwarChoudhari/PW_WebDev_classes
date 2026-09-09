// 13. Filter Active Users
// Question:
// Create an array of users containing name and isActive. Use filter() to get only the active users.
const users = [
  { name: "Rahul", isActive: true },
  { name: "Priya", isActive: false },
  { name: "Amit", isActive: true },
];

const activeUsers = users.filter((user) => user.isActive === true);
console.log(activeUsers);