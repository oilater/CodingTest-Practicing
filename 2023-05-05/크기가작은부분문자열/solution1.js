// https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript

function solution(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (Number(t.substring(i, i + p.length)) <= Number(p)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("3141592", "271")); // 2
console.log(solution("500220839878", "7")); // 	8
console.log(solution("10203", "15")); // 3
