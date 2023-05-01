// https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

function solution(arr, divisor) {
  arr = arr.sort((a, b) => a - b).filter((value) => value % divisor === 0);
  if (arr[0] === undefined) {
    arr.push(-1);
  }
  return arr;
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]
