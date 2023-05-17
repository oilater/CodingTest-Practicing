// https://school.programmers.co.kr/learn/courses/30/lessons/68935?language=javascript

function solution(n) {
  let a = n;
  let max = 0;
  let answer = 0;
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (3 ** i <= n) {
      max = i;
    }
  }

  for (let i = 0; i <= max; i++) {
    const j = max - i;

    arr.push(Math.trunc(a / 3 ** j));
    a %= 3 ** j;
  }

  for (let i = 0; i < arr.length; i++) {
    answer += 3 ** i * arr[i];
  }
  return answer;
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229

console.log(solution(3)); // 1
