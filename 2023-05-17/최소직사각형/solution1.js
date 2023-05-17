// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
  let answer = 0;
  let arrWidth = [];
  let arrHeight = [];

  for (const item of sizes) {
    item.sort((a, b) => b - a);
  }

  for (const item of sizes) {
    arrWidth.push(item[0]);
    arrHeight.push(item[1]);
  }

  return Math.max(...arrWidth) * Math.max(...arrHeight);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
