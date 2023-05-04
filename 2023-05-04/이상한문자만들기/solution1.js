// https://school.programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

function solution(s) {
  const arr = s.split(" ");
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        arr[i][j] = arr[i][j].toUpperCase();
        console.log(arr[i][j]);
      }
    }
  }

  return arr;
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
