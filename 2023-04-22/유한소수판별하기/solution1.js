// https://school.programmers.co.kr/learn/courses/30/lessons/120878?language=javascript

function solution(a, b) {
  let share = 0;
  let mom = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      share = i;
    }
  }
  mom = b / share;

  while (mom !== 1) {
    if (mom % 2 === 0) {
      mom /= 2;
    } else if (mom % 5 === 0) {
      mom /= 5;
    } else {
      return 2;
    }
  }

  return 1;
}

console.log(solution(7, 20)); // 1
console.log(solution(11, 22)); // 1
console.log(solution(12, 21)); // 2
