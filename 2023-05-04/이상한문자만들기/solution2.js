// https://school.programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

function solution(s) {
  const arr = s.split(" ");
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        answer += arr[i][j].toUpperCase();
      } else {
        answer += arr[i][j].toLowerCase();
      }
    }
    if (i === arr.length - 1) {
      return answer;
    }
    answer += " ";
  }

  return answer;
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
