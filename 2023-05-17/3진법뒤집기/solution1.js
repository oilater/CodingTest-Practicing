// https://school.programmers.co.kr/learn/courses/30/lessons/68935?language=javascript

function solution(n) {
  let a = n;
  let answer = 0;
  let arr = [];
  while (a !== 0) {
    for (let i = 1; i < 1000; i++) {
      if (3 ** i > a) {
        arr.push(Math.trunc(a / 3 ** (i - 1)));
        a %= 3 ** (i - 1);
        break;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] * 3 ** i;
  }
  return answer;
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
