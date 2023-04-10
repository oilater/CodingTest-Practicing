// https://school.programmers.co.kr/learn/courses/30/lessons/120834?language=javascript

function solution(age) {
  let answer = "";
  age = age.toString();

  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  for (let i = 0; i < age.length; i++) {
    answer += alpha[age[i]];
  }
  return answer;
}

console.log(solution(23)); // "cd"
console.log(solution(51)); // "fb"
console.log(solution(100)); // "baa"
