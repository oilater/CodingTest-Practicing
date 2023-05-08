// https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript

function countY(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        count++;
      } else {
        count += 2;
      }
    }
  }

  return count;
}

function solution(number, limit, power) {
  let answer = 0;
  let temp = 0;

  for (let i = 1; i <= number; i++) {
    temp = countY(i);

    if (temp > limit) {
      temp = power;
    }
    answer += temp;
  }

  return answer;
}

console.log(solution(5, 3, 2)); //	10
console.log(solution(10, 3, 2)); // 21
