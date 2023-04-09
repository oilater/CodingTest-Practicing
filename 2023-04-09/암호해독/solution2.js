// https://school.programmers.co.kr/learn/courses/30/lessons/120892?language=javascript

function solution(cipher, code) {
  let answer = "";
  for (let i = 1; i < cipher.length + 1; i++) {
    if (i % code === 0) {
      answer += cipher[i - 1];
    }
  }

  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); // "attack"
console.log(solution("pfqallllabwaoclk", 2)); // "fallback"

//내 풀이
