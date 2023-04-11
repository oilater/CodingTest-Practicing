// https://school.programmers.co.kr/learn/courses/30/lessons/120814?language=javascript
function solution(n) {
  let answer = 0;

  if (n % 7 === 0) {
    answer = Math.trunc(n / 7);
  } else {
    answer = Math.trunc(n / 7) + 1;
  }

  return answer;
}

console.log(solution(7)); // 1
console.log(solution(1)); // 1
console.log(solution(15)); // 3
console.log(solution(98)); // 3
