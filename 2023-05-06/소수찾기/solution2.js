// https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript

function solution(n) {
  let answer = 0;
  const arr = [2, 3, 5, 7, 11];

  if (n < 11) {
    for (let i = 2; i <= n; i++) {
      let count = 0;
      for (let j = 0; j <= i; j++) {
        if (i % j === 0) {
          count++;
        }
      }

      if (count < 3 && count === 2) {
        answer++;
      }
    }
  } else {
    for (let i = 11; i <= n; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (i % arr[j] !== 0) {
          count++;
        }
      }

      if (count === 4) {
        answer++;
      }
    }
    answer += 4;
  }

  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
