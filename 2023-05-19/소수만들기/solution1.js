// https://school.programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count == 2 ? 1 : 0;
}

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let n = nums[i] + nums[j] + nums[k];
        answer += isPrime(n);
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
