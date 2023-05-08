// https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript

function solution(number, limit, power) {
  let answer = 0;
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    arr.push(count);
  }

  for (let n of arr) {
    if (n > limit) {
      n = power;
    }
    answer += n;
  }

  return answer;
}

console.log(solution(5, 3, 2)); //	10
console.log(solution(10, 3, 2)); // 21
