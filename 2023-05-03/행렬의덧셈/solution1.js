// https://school.programmers.co.kr/learn/courses/30/lessons/12950?language=javascript

function solution(arr1, arr2) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
    temp = [];
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4,6],[7,9]]
console.log(solution([[1], [2]], [[3], [4]])); // [[4],[6]]
