// https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

function solution(d, budget) {
  let sum = 0;
  let count = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (sum + d[i] < budget) {
      sum += d[i];
      count++;
    } else if (sum + d[i] === budget) {
      return count + 1;
    } else if (sum + d[i] > budget) {
      return count;
    }
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4

console.log(solution([1, 1, 1, 3], 10)); // 4
