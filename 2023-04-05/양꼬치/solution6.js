// https://school.programmers.co.kr/learn/courses/30/lessons/120830?language=javascript

function solution(n, k) {
  let answer = n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;

  return answer;
}

console.log(solution(10, 3)); // 124,000
console.log(solution(64, 6)); // 768,000

// 프로그래머스 정답 제출 후 다른 사람의 풀이  ...
