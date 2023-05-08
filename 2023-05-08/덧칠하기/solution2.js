// https://school.programmers.co.kr/learn/courses/30/lessons/161989?language=javascript

function solution(n, m, sections) {
  let answer = 0;
  let painted = 0;

  for (const section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }

  return answer;
}

console.log(solution(8, 4, [2, 3, 6])); //	2
console.log(solution(100, 4, [2, 3, 6, 97, 100])); // 3
console.log(solution(5, 4, [1, 3])); //	1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
console.log(solution(8, 2, [1, 2, 3, 4])); // 2

// 페인트
