// https://school.programmers.co.kr/learn/courses/30/lessons/12933?language=javascript

function solution(n) {
  return Number(
    [...String(n)]
      .sort((a, b) => b - a)
      .map((value) => Number(value))
      .join("")
  );
}

console.log(solution(118372)); // 873211
