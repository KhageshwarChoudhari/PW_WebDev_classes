// 14. Destructure Function Parameters
// Create a function named displayUser that receives a user object. Use object destructuring in the function
// parameters to access and display name and email.

const user = {
  name: "Rahul",
  email: "rahul@example.com"
};

function displayUser({ name, email }){
    console.log(name);
    console.log(email);
}
displayUser(user);

// Output:
// Rahul
// rahul@example.com
