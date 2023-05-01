// https://school.programmers.co.kr/learn/courses/30/lessons/86051?language=javascript

function solution(numbers) {
  let answer = 0;
  let count = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === numbers[j]) {
        count++;
      }
    }
    if (count === 0) {
      answer += i;
    }
    count = 0;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6
