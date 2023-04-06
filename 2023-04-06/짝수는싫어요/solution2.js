// https://school.programmers.co.kr/learn/courses/30/lessons/120813?language=javascript

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]

// 프로그래머스 다른 사람 풀이
