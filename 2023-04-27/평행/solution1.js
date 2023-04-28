// https://school.programmers.co.kr/learn/courses/30/lessons/120875?language=javascript

function solution(dots) {
  let answer = 0;
  let arr = [];
  let son = 0;
  let mom = 0;

  mom = dots[0][0] - dots[1][0];
  son = dots[0][1] - dots[1][1];
  arr.push(son / mom);

  mom = dots[2][0] - dots[3][0];
  son = dots[2][1] - dots[3][1];
  arr.push(son / mom);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[i]) === Number(arr[j])) {
        return 1;
      }
    }
  }
  arr = [];

  mom = dots[0][0] - dots[2][0];
  son = dots[0][1] - dots[2][1];
  arr.push(son / mom);

  mom = dots[1][0] - dots[3][0];
  son = dots[1][1] - dots[3][1];
  arr.push(son / mom);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[i]) === Number(arr[j])) {
        return 1;
      }
    }
  }

  arr = [];

  mom = dots[0][0] - dots[3][0];
  son = dots[0][1] - dots[3][1];
  arr.push(son / mom);

  mom = dots[1][0] - dots[2][0];
  son = dots[1][1] - dots[2][1];
  arr.push(son / mom);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[i]) === Number(arr[j])) {
        return 1;
      }
    }
  }

  return 0;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1

console.log(
  solution([
    [0, 0],
    [3, 3],
    [4, 5],
    [5, 7],
  ])
); // 1

console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); // 0
