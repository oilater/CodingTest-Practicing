// https://school.programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

function solution(n) {
  n = String(n);
  let answer = 0;
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }

  return answer;
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
