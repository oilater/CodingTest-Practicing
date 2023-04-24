// https://school.programmers.co.kr/learn/courses/30/lessons/120812?language=javascript

function solution(array) {
  array = array.sort((a, b) => a - b);
  let arr = [];
  arr.push(array[0]);
  let answer = 0;

  // array 개수 비교를 위해 arr 에 원소 하나씩만 넣어준다.
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      arr.push(array[i + 1]);
    }
  }

  if (array.length === 1) {
    return array[0];
  }
  // 비교 시작
  let count = 0;
  let p = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[i] === array[j]) {
        count++;
      }
    }
    p.push(count);
    count = 0;
  }

  let maxNum = p[0];
  let first = p[0];
  for (let i = 0; i < p.length; i++) {
    if (first < p[i]) {
      maxNum = Math.max(p[i]);
    }
  }

  for (let i = 0; i < p.length; i++) {
    if (p[i] === maxNum) {
      count++;
    }
    if (count >= 2) {
      return -1;
    }
  }

  let num = p[0];
  for (let i = 0; i < p.length; i++) {
    if (maxNum === p[i]) {
      answer = arr[i];
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([3, 2, 1, 3, 3, 3])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([0, 0, 3, 3, 3])); // 1
console.log(solution([3, 1, 3, 1, 3, 1, 1, 2, 2, 1, 1])); // 1
