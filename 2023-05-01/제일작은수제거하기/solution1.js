// https://school.programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function solution(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      arr.splice(i, 1);
    }
  }

  if (arr.length === 0) {
    return [-1];
  }
  return arr;
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]
