// https://school.programmers.co.kr/learn/courses/30/lessons/120876?language=javascript

function solution(lines) {
  let answer = 0;

  let min = Math.min(lines[0][0], lines[1][0], lines[2][0]);
  let max = Math.max(lines[0][1], lines[1][1], lines[2][1]);

  for (let i = min; i <= max; i++) {
    
    
  }
  console.log(min, max);
  return max;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
); // 2
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
); // 0
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
); // 8
