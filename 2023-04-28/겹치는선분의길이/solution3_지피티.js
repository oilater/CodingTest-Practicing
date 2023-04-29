// https://school.programmers.co.kr/learn/courses/30/lessons/120876?language=javascript

function solution(lines) {
  let numLine = Array(201).fill(0);
  let numLine = Array(201).fill(0);
  // 각 라인을 반복하고 수직선에 위치를 표시
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      numLine[j + 100]++;
    }
  }

  // 수직선을 반복하고 겹치는 세그먼트의 길이를 계산
  let overlap = 0;
  for (let i = 0; i < numLine.length; i++) {
    if (numLine[i] >= 2) {
      overlap++;
    }
  }

  return overlap;
}

// console.log(
//   solution([
//     [0, 1],
//     [2, 5],
//     [3, 9],
//   ])
// ); // 2
// console.log(
//   solution([
//     [-1, 1],
//     [1, 3],
//     [3, 9],
//   ])
// ); // 0
// console.log(
//   solution([
//     [0, 5],
//     [3, 9],
//     [1, 10],
//   ])
// ); // 8
// console.log(
//   solution([
//     [-10, 5],
//     [-10, 5],
//     [8, 11],
//   ])
// ); // 15
// console.log(
//   solution([
//     [-1, 5],
//     [5, 7],
//     [6, 11],
//   ])
// ); // 1
console.log(
  solution([
    [0, 4],
    [2, 6],
    [1, 2],
  ])
);
