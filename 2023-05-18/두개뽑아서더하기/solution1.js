// https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

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
