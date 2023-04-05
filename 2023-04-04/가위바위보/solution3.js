// https://school.programmers.co.kr/learn/courses/30/lessons/120839?language=javascript

function solution(rsp) {
  let win = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "2") {
      win += "0";
    } else if (rsp[i] === "0") {
      win += "5";
    } else if (rsp[i] === "5") {
      win += "2";
    }
  }
  return win;
}

console.log(solution("2")); // "0"
console.log(solution("205")); // "052"
