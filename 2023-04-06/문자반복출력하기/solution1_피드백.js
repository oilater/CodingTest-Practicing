// https://school.programmers.co.kr/learn/courses/30/lessons/120825?language=javascript

function solution(my_string, n) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }

  return answer;
}

console.log(solution("hello", 3)); // "hhheeellllllooo"
