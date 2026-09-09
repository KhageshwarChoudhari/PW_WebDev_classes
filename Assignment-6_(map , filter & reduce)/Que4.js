// 4. Create Updated Product Prices
// Create an array of product prices. Use map() to create a new array where every price is increased by
// 10%. Keep the original array unchanged.

const arr1 = [100, 200, 300];
const arr2 = arr1.map((value) => {
  let percent = value * 0.1;
  return percent + value;
});
console.log(arr2);
// output:
// [110, 220, 330]