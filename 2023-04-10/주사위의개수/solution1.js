// https://school.programmers.co.kr/learn/courses/30/lessons/120845?language=javascript

function solution(box, n) {
  let answer = 1;
  for (let i = 0; i < box.length; i++) {
    answer *= Math.trunc(box[i] / n);
  }

  return answer;
}

console.log(solution([1, 1, 1], 1)); // 1
console.log(solution([10, 8, 6], 3)); //	12
