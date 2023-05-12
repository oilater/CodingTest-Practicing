// const sum = Array.from(new Array(5), (_, k) => k + 5).reduce(
//   (acc, cur) => acc + cur,
//   0
// );

// console.log(sum);

// console.log(Array.from("hello"));

// const funcA = (...arguments) => {
//   return Array.from(arguments);
// };

// console.log(funcA(1, 2, 3, 5));

const arr = Array.from(new Array(31), (_, index) => index + 1);
const a = Array.from(arr, (x) => 2 * x - 1);
console.log(a);
