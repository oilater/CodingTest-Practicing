// https://school.programmers.co.kr/learn/courses/30/lessons/120844?language=javascript

function solution(numbers, direction) {
  if (direction === "right") {
    let right = numbers[numbers.length - 1];
    numbers.splice(numbers.length - 1, 1);
    numbers.splice(0, 0, right);
  } else {
    let left = numbers[0];
    numbers.splice(0, 1);
    numbers.splice(numbers.length, 1, left);
  }

  return numbers;
}

console.log(solution([1, 2, 3], "right")); // [3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left")); // [455, 6, 4, -1, 45, 6, 4];

// 내 풀이
