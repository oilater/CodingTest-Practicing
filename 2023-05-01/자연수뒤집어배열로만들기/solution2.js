// https://school.programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

function solution(n) {
  return [...String(n)].reverse().map((value) => Number(value));
}

console.log(solution(12345)); // [5,4,3,2,1]
