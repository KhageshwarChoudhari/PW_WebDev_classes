// 10. Display Object Entries
// Create an object containing a user's name and email. Use Object.entries() and forEach() to display each
// key along with its value.

const user = {
 name: "Rahul",
 email: "rahul@example.com"
};

Object.entries(user).forEach(([key , value]) => console.log(key , ":", value) )

// Output:
// name: Rahul
// email: rahul@example.com