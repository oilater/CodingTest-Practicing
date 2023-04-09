// https://school.programmers.co.kr/learn/courses/30/lessons/120892?language=javascript

function solution(cipher, code) {
  let answer = "";
  for (let i = 0; i < cipher.length / code; i++) {
    answer += cipher[code - 1 + code * i];
  }

  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); // "attack"
console.log(solution("pfqallllabwaoclk", 2)); // "fallback"


//정답 아님