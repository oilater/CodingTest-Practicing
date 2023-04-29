// https://school.programmers.co.kr/learn/courses/30/lessons/120876?language=javascript

function solution(lines) {
  let answer = 0;
  let arr = [];
  let arrA = [];
  let arr2 = [];

  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j <= lines[i][1]; j++) {
      arr.push(j);
    }
  }
  console.log(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1, "");
    }
  }

  arr = arr.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count < 2) {
      arr.splice(i, 1, "");
    }
    count = 0;
  }
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      arrA.push(arr[i]);
    }
  }

  for (let i = -100; i <= 100; i++) {
    for (let j = 0; j < arrA.length; j++) {
      if (i === arrA[j]) {
        arr2.push(i);
      }
    }
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    if (arr2[i] + 1 !== arr2[i + 1]) {
      continue;
    }

    if (arr2[i] + 1 === arr2[i + 1]) {
      answer += arr2[i + 1] - arr2[i];
    }
  }
  console.log(arr2);
  return answer;
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
