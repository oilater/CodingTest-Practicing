// https://school.programmers.co.kr/learn/courses/30/lessons/12922?language=javascript

function solution(n) {
  let answer = "";
  const wm = "수박";

  for (let i = 1; i < n + 1; i++) {
    if (i % 2 !== 0) {
      answer += wm[0];
    }

    if (i % 2 === 0) {
      answer += wm[1];
    }
  }

  return answer;
}

console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"
