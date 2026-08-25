// 8. Sum of Even Numbers
// Write a program to calculate the sum of all even numbers from 1 to 20.

let num = 1;
let sum = 0;
while (num <= 20) {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
}
console.log(sum);
