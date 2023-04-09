// https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript

function solution(n) {
  let answer = 0;
  let n2 = n.toString();
  for (let i = 0; i < n2.length; i++) {
    answer += Number(n2[i]);
  }

  return answer;
}

console.log(solution(1234)); // 10
console.log(solution(930211)); // 16
