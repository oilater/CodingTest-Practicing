// https://school.programmers.co.kr/learn/courses/30/lessons/120814?language=javascript

function solution(n) {
  let answer = 0;
  if (parseInt(n / 7) <= 1) {
    answer = 1;
  } else {
    answer = parseInt(n / 7) + 1;
  }

  return answer;
}

console.log(solution(7)); // 1
console.log(solution(1)); // 1
console.log(solution(15)); // 3
