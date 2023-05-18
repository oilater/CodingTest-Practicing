// https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

function solution(numbers) {
  const answer = [];

  numbers.map((value) => {
    for (let i = numbers.indexOf(value) + 1; i < numbers.length; i++) {
      if (!answer.includes(value + numbers[i])) {
        answer.push(value + numbers[i]);
      }
    }
  });

  return answer.sort((a, b) => a - b);
}

// 또는

function solution(numbers) {
  const answer = [];
  const s = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      s.add(numbers[i] + numbers[j]);
    }
  }

  s.forEach((value) => answer.push(value));

  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
