// https://school.programmers.co.kr/learn/courses/30/lessons/120841?language=javascript

function solution(dot) {
  let answer = 0;

  if (dot[0] > 0) {
    answer = dot[1] > 0 ? 1 : 4;
  } else {
    answer = dot[1] > 0 ? 2 : 3;
  }
  return answer;
}

console.log(solution([2, 4])); // 1
console.log(solution([-7, 9])); // 2
