// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
  const arr = [];
  for (let i = 0; i < commands.length; i++) {
    let arr2 = [];
    for (let j = commands[i][0] - 1; j < commands[i][1]; j++) {
      arr2.push(array[j]);
    }
    arr2.sort((a, b) => a - b);
    arr.push(arr2[commands[i][2] - 1]);
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
