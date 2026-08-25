// 10. Skip a Number
// Print numbers from 1 to 10, but skip the number 5 using the continue statement.

let num = 1;
while (num <= 10) {
  if (num === 5) {
    num++;
    continue;
  }
  console.log(num);
  num++;
}
