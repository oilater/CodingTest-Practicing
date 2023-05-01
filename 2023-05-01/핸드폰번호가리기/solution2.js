// https://school.programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(s) {
  return "*".repeat(s.length - 4) + s.slice(s.length - 4);
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // "*****8888"
