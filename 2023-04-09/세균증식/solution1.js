// https://school.programmers.co.kr/learn/courses/30/lessons/120910?language=javascript

function solution(n, t) {
  return n * 2 ** t;
}

console.log(solution(2, 10)); // 2048
console.log(solution(7, 15)); // 229376

// 다른 사람 답 중 비트연산자 이용한 shift 연산?
/* 
function solution(n, t) {
  return n * 2 ** t;
}
*/
