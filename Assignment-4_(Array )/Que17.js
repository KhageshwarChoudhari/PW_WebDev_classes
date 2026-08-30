// 17. Flatten a Multi-Level Array
// Use flat() with an appropriate depth to flatten the following array completely.
// Example:
// Input: [1, [2, [3, 4]]]
// Output: [1, 2, 3, 4]

//solution-->

const arr = [1, [2, [3, 4]]]
const Flat = arr.flat()
console.log(Flat.flat());