// https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript

function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    let count = 0;
    if ((i !== 2 && i % 2 === 0) || (i !== 3 && i % 3 === 0)) {
      continue;
    }
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }

    if (count < 3 && count === 2) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3

// test case 3개 시간 초과
