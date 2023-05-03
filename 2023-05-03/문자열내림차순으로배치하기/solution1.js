// https://school.programmers.co.kr/learn/courses/30/lessons/12917?language=javascript

function solution(s) {
  var answer = "";
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alpha.toUpperCase() + alpha;
  let arr = [...s]
    .map((value) => alphaArr.indexOf(value))
    .sort((a, b) => b - a)
    .map((value) => alphaArr[value])
    .join("");

  return arr;
}

console.log(solution("Zbcdefg")); // "gfedcbZ"
