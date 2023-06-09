// https://school.programmers.co.kr/learn/courses/30/lessons/120853?language=javascript

function solution(s) {
  let answer = 0;
  const arr = s.split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      arr[i] = -arr[i - 1];
    }
    answer += arr[i];
  }

  return answer;
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("10 Z 20 Z")); // 0
console.log(solution("-1 -2 -3 Z")); // -3
