// https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript

function solution(k, m, score) {
  score = score.sort((a, b) => b - a);
  let answer = 0;

  for (let i = 1; i <= score.length; i++) {
    if (score[m * i - 1] !== undefined) {
      answer += score[m * i - 1] * m;
    }
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); //	8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
