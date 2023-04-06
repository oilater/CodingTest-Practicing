// https://school.programmers.co.kr/learn/courses/30/lessons/120813?language=javascript

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]

//if 문 없이는 안되겠지,,? for 문에서 건너뛰는 방법?
