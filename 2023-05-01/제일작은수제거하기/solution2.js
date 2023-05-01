// https://school.programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  if (arr.length < 1) {
    return [-1];
  }
  return arr;
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]
