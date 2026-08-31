// 9. Get Object Entries
// Create a settings object and use Object.entries() to convert its properties into key-value pairs

const settings = {
 theme: "dark",
 language: "English",
 notifications: true
};

console.log(Object.entries(settings));

// Expected Output:
// [
//  ["theme", "dark"],
//  ["language", "English"],
//  ["notifications", true]
// ]