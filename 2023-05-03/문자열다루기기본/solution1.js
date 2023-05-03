// https://school.programmers.co.kr/learn/courses/30/lessons/12918?language=javascript

function solution(s) {
  let count = 0;
  let answer = false;
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (Number(s[i]) >= 0) {
        count++;
      } else {
        return false;
      }
      if (count === 4 || count === 6) {
        answer = true;
      }
    }
  }
  return answer;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
