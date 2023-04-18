// https://school.programmers.co.kr/learn/courses/30/lessons/120840?language=javascript

function factorial(n) {
  let multiple = 1;
  for (let i = 1; i < n + 1; i++) {
    multiple *= i;
  }
  return multiple;
}

function solution(balls, share) {
  let son = 0;
  let mom = 0;

  son = factorial(balls);
  mom = factorial(share) * factorial(balls - share);

  return Math.round(son / mom);
}

console.log(solution(3, 2)); // 3
console.log(solution(5, 3)); //	10
console.log(solution(6, 2)); //	10
