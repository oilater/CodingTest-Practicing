// https://school.programmers.co.kr/learn/courses/30/lessons/120852?language=javascript

function solution(n) {
  const answer = [];
  let count = 0;

  const sosu = [2, 3];

  for (let i = 5; i < 10000; i++) {
    for (let j = 3; j < i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      sosu.push(i);
    }
    count = 0;
  }

  // 시작
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < sosu.length; j++) {
      if (n % i === 0 && i === sosu[j]) {
        answer.push(i);
      }
    }
  }

  return answer;
}

console.log(solution(12)); // [2, 3]
console.log(solution(17)); // [17]
console.log(solution(420)); // [2, 3, 5, 7]
