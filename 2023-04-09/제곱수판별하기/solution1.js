// https://school.programmers.co.kr/learn/courses/30/lessons/120909?language=javascript

function solution(n) {
  let answer = 2;
  for (let i = 0; i < n / 2; i++) {
    if (n === i ** 2) {
      answer = 1;
      break;
    }
  }

  return answer;
}

console.log(solution(144)); //	1
console.log(solution(976)); // 2
