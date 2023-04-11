// https://school.programmers.co.kr/learn/courses/30/lessons/120815?language=javascript

function solution(n) {
  let answer = 0;
  for (let i = 1; i < 100; i++) {
    if ((i * 6) % n === 0) {
      answer = i;
      break;
    }
  }

  return answer;
}

console.log(solution(6)); // 1
console.log(solution(10)); // 5
console.log(solution(4)); // 2

//for 문이 뭔가 비효율적인 느낌....

