// https://school.programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(phone_number) {
  let answer = [];

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer.push("*");
    } else {
      answer.push(phone_number[i]);
    }
  }
  return answer.join("");
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // "*****8888"
