// https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

function solution(s) {
  const p = ["p", "P"];
  const y = ["y", "Y"];
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (s[i] === p[j]) {
        pCount++;
      }
    }

    for (let k = 0; k < y.length; k++) {
      if (s[i] === y[k]) {
        yCount++;
      }
    }
  }

  if (pCount === yCount) {
    return true;
  }

  return false;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
