// https://school.programmers.co.kr/learn/courses/30/lessons/120843?language=javascript

function solution(numbers, k) {
  let answer = 0;
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < numbers.length; j++) {
      arr.push(numbers[j]);
    }
  }

  answer = arr[(k - 1) * 2];

  return answer;
}

console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(solution([1, 2, 3], 3)); // 2
