// https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

function solution(n, m) {
  const star = "*";
  let answer = "";
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      answer += star;
    }
    console.log(answer);
    console.log("\n");
  }
}

console.log(solution(2, 3));
