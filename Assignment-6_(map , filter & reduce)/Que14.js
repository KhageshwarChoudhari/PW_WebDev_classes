// 14. Filter Gmail Addresses
// Question:
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".


const emailAddresses = [
  "john@gmail.com",
  "jane@yahoo.com",
  "bob@gmail.com",
  "alice@hotmail.com"
];

const gmailAddresses = emailAddresses.filter((email) => email.includes("@gmail.com"));
console.log(gmailAddresses);