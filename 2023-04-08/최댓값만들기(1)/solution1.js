// https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript

function solution(numbers) {
  var answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j + 1] < numbers[j]) {
        let a = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = a;
      }
    }
    answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); //	20
console.log(solution([0, 31, 24, 10, 1, 9])); // 744;
var hi = "kim";
