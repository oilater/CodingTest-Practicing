// https://school.programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

function solution(s) {
  return s.length % 2 !== 0
    ? `${s[(s.length - 1) / 2]}`
    : `${
        s[Math.trunc((s.length - 1) / 2)] +
        s[Math.trunc((s.length - 1) / 2) + 1]
      }`;
}

console.log(solution("abcde")); // "c"
console.log(solution("qwer")); // "we"
