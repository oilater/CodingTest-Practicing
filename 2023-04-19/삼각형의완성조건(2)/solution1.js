// https://school.programmers.co.kr/learn/courses/30/lessons/120868?language=javascript

function solution(sides) {
  sides.sort((a, b) => a - b);
  let count = 0;
  const min = sides[1] - sides[0] + 1;
  const sum = sides[0] + sides[1];

  for (let i = min; i < sum; i++) {
    count++;
  }

  return count;
}

console.log(solution([1, 2])); // 1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13
