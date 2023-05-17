// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function makeArr(arr, com) {
  let num = 0;
  let arrA = [];
  arrA = arr.splice(com[0] - 1, com[1] - com[0] + 1).sort((a, b) => a - b);
  console.log(arr);
  return num;
}

function solution(array, commands) {
  const arr = [];
  for (let i = 0; i < commands.length; i++) {
    arr.push(makeArr(array, commands[i]));
  }

  return arr;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
