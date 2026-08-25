// 18. Multiplication Table Function
// Create a function printTable(num) that prints the multiplication table of the given number.

let printTable = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
  return "";
};
printTable(8)