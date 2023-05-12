// https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript

function solution(wallpaper) {
  const temp = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        temp.push([i, j]);
      }
    }
  }

  let xMin = temp[0][1];
  let yMin = temp[0][0];
  let xMax = temp[0][1];
  let yMax = temp[0][0];

  for (let i = 0; i < temp.length; i++) {
    if (temp[i][1] <= xMin) {
      xMin = temp[i][1];
    }

    if (temp[i][1] >= xMax) {
      xMax = temp[i][1] + 1;
    }

    if (temp[i][0] <= yMin) {
      yMin = temp[i][0];
    }

    if (temp[i][0] >= yMax) {
      yMax = temp[i][0] + 1;
    }
  }

  return [yMin, xMin, yMax, xMax];
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
