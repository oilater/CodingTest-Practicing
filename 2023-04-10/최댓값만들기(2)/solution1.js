// https://school.programmers.co.kr/learn/courses/30/lessons/120862?language=javascript

function solution(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let a = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = a;
      }
    }
  }

  let answer = 0;
  let start = numbers[0] * numbers[1];
  let end = numbers[numbers.length - 2] * numbers[numbers.length - 1];

  if (start > end) {
    answer = start;
  } else {
    answer = end;
  }

  return answer;
}

console.log(solution([1, 2, -3, 4, -5])); // 15
console.log(solution([0, -31, 24, 10, 1, 9])); // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); //600

//내 풀이