// https://school.programmers.co.kr/learn/courses/30/lessons/120819?language=javascript

function solution(money) {
  var answer = [];
  answer.push(Math.trunc(money / 5500));
  answer.push(money % 5500);
  return answer;
}

console.log(solution(5500)); // [1, 0]
console.log(solution(15000)); //[(2, 4000)];
