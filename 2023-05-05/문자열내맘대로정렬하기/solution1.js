// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

function solution(strings, n) {
  strings = strings.sort();
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let arr = [];

  for (let i = 0; i < strings.length; i++) {
    arr.push(alpha.indexOf(strings[i][n]));
  }

  arr = arr.sort((a, b) => a - b);

  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (arr[i] === alpha.indexOf(strings[j][n])) {
        if (!answer.includes(strings[j])) {
          answer.push(strings[j]);
        }
      }
    }
  }
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
