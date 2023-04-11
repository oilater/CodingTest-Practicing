// https://school.programmers.co.kr/learn/courses/30/lessons/120814?language=javascript
function solution(n) {
  const x = Math.trunc(n / 7);

  if (n % 7 === 0) {
    return x;
  } else {
    return x + 1;
  }
}

console.log(solution(7)); // 1
console.log(solution(1)); // 1
console.log(solution(15)); // 3
console.log(solution(98)); // 3

