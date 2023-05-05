// https://school.programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

function solution(s, n) {
  let answer = "";
  const so = "abcdefghijklmnopqrstuvwxyz".repeat(2);
  const dae = so.toUpperCase().repeat(2);

  for (let i = 0; i < s.length; i++) {
    if (dae.includes(s[i])) {
      answer += dae[dae.indexOf(s[i]) + n];
    }

    if (so.includes(s[i])) {
      answer += so[so.indexOf(s[i]) + n];
    }

    if (s[i] === " ") {
      answer += " ";
    }
  }

  return answer;
}

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"
