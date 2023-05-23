let arr = ["a", ".", ".", ".", "b", "."];

arr = arr
  .reduce(
    (acc, cur, idx, arr) =>
      (acc += cur === "." && cur === arr[idx - 1] ? "" : cur)
  )
  .split("");

console.log(arr);
