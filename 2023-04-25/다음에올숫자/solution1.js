// https://school.programmers.co.kr/learn/courses/30/lessons/120924?language=javascript

function solution(arr) {
  let answer = 0;
  const a = arr[1] - arr[0];
  const b = arr[1] / arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i - 1] === arr[i + 1] - arr[i]) {
      answer = arr[arr.length - 1] + a;
    }

    if (arr[i] / arr[i - 1] === arr[i + 1] / arr[i]) {
      answer = arr[arr.length - 1] * b;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4])); //	5
console.log(solution([2, 4, 8])); // 16
