// https://school.programmers.co.kr/learn/courses/30/lessons/120876?language=javascript

function solution(lines) {
  let answer = 0;
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j <= lines[i][1]; j++) {
      arr.push(j);
    }
  }
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr2.push(arr[i]);
    }
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr2[i] === arr2[j]) {
        arr2.splice(arr2[j], 1);
      }
    }
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    if (arr2[i] + 1 !== arr2[i + 1]) {
      return 0;
    }
  }

  return arr2[arr2.length - 1] - arr2[0];
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
