// https://school.programmers.co.kr/learn/courses/30/lessons/120837?language=javascript

function solution(hp) {
  const a1 = Math.trunc(hp / 5);
  const a2 = Math.trunc((hp - 5 * a1) / 3);
  const a3 = Math.trunc(hp - 5 * a1 - 3 * a2);
  return a1 + a2 + a3;
}

console.log(solution(23)); // 5
console.log(solution(24)); // 6
console.log(solution(999)); // 201

// 5 3 1
