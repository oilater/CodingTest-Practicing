// https://school.programmers.co.kr/learn/courses/30/lessons/120836?language=javascript

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(20)); // 6
console.log(solution(100)); // 9
