const arr1 = [
  { name: "Rahul", role: "student" },
  { name: "Priya", role: "student" },
];
const newArr = arr1.map((value) => ({ ...value, role: "developer" }));

console.log(newArr);
