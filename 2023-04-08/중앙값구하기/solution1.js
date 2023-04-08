// https://school.programmers.co.kr/learn/courses/30/lessons/120811?language=javascript

function solution(array) {
  let answer = 0;
  answer = array[(array.length - 1) / 2];
  return answer;
}

console.log(solution([1, 2, 7, 10, 11])); // 7
console.log(solution([9, -1, 0])); // 0
