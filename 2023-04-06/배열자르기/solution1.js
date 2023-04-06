// https://school.programmers.co.kr/learn/courses/30/lessons/120833?language=javascript

function solution(numbers, num1, num2) {
  var answer = [];
  answer = numbers.splice(num1, num2 - num1 + 1);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3)); //	[2, 3, 4]
console.log(solution([1, 3, 5], 1, 2)); //	[3, 5]
