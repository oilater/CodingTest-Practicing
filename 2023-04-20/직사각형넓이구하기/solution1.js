// https://school.programmers.co.kr/learn/courses/30/lessons/120860?language=javascript

function solution(dots) {
  let answer = 0;
  let width = 0;
  let height = 0;

  for (let i = 0; i < dots.length; i++) {
    if (dots[i][0] !== dots[i + 1][0]) {
      width = Math.abs(dots[i][0] - dots[i + 1][0]);
      break;
    }
  }

  for (let i = 0; i < dots.length; i++) {
    if (dots[i][1] !== dots[i + 1][1]) {
      height = Math.abs(dots[i][1] - dots[i + 1][1]);
      break;
    }
  }

  answer = width * height;

  return answer;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); //	1
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); // 4
