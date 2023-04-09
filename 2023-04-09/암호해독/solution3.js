// https://school.programmers.co.kr/learn/courses/30/lessons/120892?language=javascript

function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); // "attack"
console.log(solution("pfqallllabwaoclk", 2)); // "fallback"

//프로그래머스 다른 사람 풀이 - 내가 원래 풀려고 했던 것
//증감식 부분에 결국 증가되는 값이 i에 들어가게 해야함
