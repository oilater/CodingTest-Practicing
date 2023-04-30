// https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false

// 프로그래머스 다른 사람의 풀이.. 기발했다 ㅎㅅㅎ
