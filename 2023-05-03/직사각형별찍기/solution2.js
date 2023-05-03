// https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

function solution(n, m) {
  const star = "*";
  return "\n" + (star.repeat(n) + "\n").repeat(m);
}
console.log(solution(3, 3));
