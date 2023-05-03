// https://school.programmers.co.kr/learn/courses/30/lessons/12917?language=javascript

function solution(s) {
  return s.split("").sort().reverse().join("");
}

console.log(solution("Zbcdefg")); // "gfedcbZ"

//,, sort() 하면 대문자가 앞으로 정렬되는구나
//console.log("abcdeABCDE".split("").sort());
