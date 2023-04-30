// https://school.programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (n === i ** 2) {
      return (i + 1) ** 2;
    }
  }
  return -1;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1
