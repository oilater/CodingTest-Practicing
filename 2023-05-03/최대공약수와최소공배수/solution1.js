// https://school.programmers.co.kr/learn/courses/30/lessons/12940?language=javascript

function solution(n, m) {
  let gcd = 0;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  let lcm = 0;
  for (let i = Math.max(n, m); i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      lcm = i;
      break;
    }
  }

  return [gcd, lcm];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
