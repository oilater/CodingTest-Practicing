// https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript

function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
); // [1, 3, 5, 8]
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
); // [0, 0, 7, 9]
console.log(solution(["..", "#."])); // [1, 0, 2, 1]
