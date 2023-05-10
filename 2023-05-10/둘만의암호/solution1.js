// https://school.programmers.co.kr/learn/courses/30/lessons/155652?language=javascript

function solution(s, skip, index) {
  let answer = "";
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("").filter(function (elem) {
    if (!skip.includes(elem)) {
      return elem;
    }
  });

  for (const elem of s) {
    if (alpha.indexOf(elem) + index > alpha.length - 1) {
      answer += alpha[(alpha.indexOf(elem) + index) % alpha.length];
    } else {
      answer += alpha[alpha.indexOf(elem) + index];
    }
  }

  return answer;
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
