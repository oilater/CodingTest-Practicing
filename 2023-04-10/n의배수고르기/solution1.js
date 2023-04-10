// https://school.programmers.co.kr/learn/courses/30/lessons/120905?language=javascript

function solution(n, numlist) {
  let answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }

  return answer;
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
console.log(solution(5, [1, 9, 3, 10, 13, 5])); // [10, 5]
console.log(solution(12, [2, 100, 120, 600, 12, 12])); // [120, 600, 12, 12]
